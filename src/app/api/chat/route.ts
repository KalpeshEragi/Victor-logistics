import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { cabins } from "@/data/cabins";
import { containers } from "@/data/containers";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are the AI assistant for Victor & Co. (also known as Victor Express Line), a premium logistics and shipping company based in Mumbai, India.
Your goal is to help potential clients understand the services and products offered.

--- OUR SERVICES ---
1. Sea Freight: Export/Import, FCL/LCL, worldwide network.
2. Air Freight: Fast global delivery.
3. Customs Clearance: Expert documentation and hassle-free clearing.
4. Container Trading: Buying/Selling shipping containers.
5. Prefabricated & Fabricated Cabins: Custom modular spaces.

--- OUR PRODUCTS (Use this for specific queries) ---
CABINS:
${cabins.map(c => `- ${c.name}: Price ₹${c.price} (${c.priceUnit}), Size: ${c.size}, Type: ${c.builtType}. ${c.description}`).join('\n')}

CONTAINERS:
${containers.map(c => `- ${c.name}: Price ₹${c.price} (${c.priceUnit}), Size: ${c.size}, Type: ${c.type}. ${c.description}`).join('\n')}

--- GUIDELINES ---
- Tone: Professional, helpful, and friendly.
- Keep answers concise and bulleted if listing options.
- If asked about exact current pricing (since market fluctuates), suggest they use the "Get a Quote" form for a final offer.
- Contact info: +91 8108834666, cs.mum@victorexpressline.com.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API Key missing" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Format history for Gemini (must start with 'user' role)
    const history = messages.slice(0, -1)
      .map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }))
      .filter((m: any, i: number, arr: any[]) => {
        // Drop the first message if it's not from 'user'
        if (i === 0 && m.role !== "user") return false;
        return true;
      });

    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    // Add system prompt context in the first message or as a preamble
    const prompt = messages[messages.length - 1].content;
    const finalPrompt = `${SYSTEM_PROMPT}\n\nUser Question: ${prompt}`;

    const result = await chat.sendMessage(finalPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("[CHAT API ERROR]:", error);
    return NextResponse.json({ error: "Failed to connect to AI" }, { status: 500 });
  }
}
