import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

// ── GET /api/leads ────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const service = searchParams.get("service");
    const limit = Math.min(parseInt(searchParams.get("limit") ?? "100"), 200);
    const page = Math.max(parseInt(searchParams.get("page") ?? "1"), 1);
    const skip = (page - 1) * limit;

    // Build filter object dynamically
    const filter: Record<string, string> = {};
    if (status) filter.status = status;
    if (service) filter.service = service;

    const [leads, total] = await Promise.all([
      Lead.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Lead.countDocuments(filter),
    ]);

    return NextResponse.json({ leads, total, page, limit }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/leads] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads." },
      { status: 500 }
    );
  }
}