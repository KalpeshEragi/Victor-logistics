import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Lead, { LeadStatus } from "@/models/Lead";

// ── PATCH /api/leads/[id] ─────────────────────────────────────────────────────

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ObjectId format before hitting the DB
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid lead ID." }, { status: 400 });
    }

    const body: { status?: LeadStatus; notes?: string } = await req.json();

    // Only allow whitelisted fields to be updated
    const allowedStatuses: LeadStatus[] = [
      "new",
      "contacted",
      "in_progress",
      "closed",
    ];

    const update: { status?: LeadStatus; notes?: string } = {};

    if (body.status !== undefined) {
      if (!allowedStatuses.includes(body.status)) {
        return NextResponse.json(
          { error: "Invalid status value." },
          { status: 400 }
        );
      }
      update.status = body.status;
    }

    if (body.notes !== undefined) {
      update.notes = body.notes;
    }

    if (Object.keys(update).length === 0) {
      return NextResponse.json(
        { error: "No valid fields provided for update." },
        { status: 400 }
      );
    }

    await connectDB();

    const updated = await Lead.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return NextResponse.json({ error: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated }, { status: 200 });
  } catch (error) {
    console.error("[PATCH /api/leads/[id]] Error:", error);
    return NextResponse.json(
      { error: "Failed to update lead." },
      { status: 500 }
    );
  }
}

// ── DELETE /api/leads/[id] ────────────────────────────────────────────────────

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid lead ID." }, { status: 400 });
    }

    await connectDB();

    const deleted = await Lead.findByIdAndDelete(id).lean();

    if (!deleted) {
      return NextResponse.json({ error: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[DELETE /api/leads/[id]] Error:", error);
    return NextResponse.json(
      { error: "Failed to delete lead." },
      { status: 500 }
    );
  }
}