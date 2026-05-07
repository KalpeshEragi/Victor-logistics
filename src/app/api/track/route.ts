import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AnalyticEvent from "@/models/AnalyticEvent";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, page, element, label, metadata } = body;

    if (!type || !page) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectDB();
    
    await AnalyticEvent.create({
      type,
      page,
      element,
      label,
      metadata,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[API TRACK ERROR]:", error);
    return NextResponse.json({ error: "Failed to track event" }, { status: 500 });
  }
}
