import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, message, consent } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    await connectDB();

    await Lead.create({
      name,
      email,
      phone,
      service,
      message,
      consent,
    });

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
