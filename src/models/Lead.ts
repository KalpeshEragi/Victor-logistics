import mongoose, { Schema, Document, Model } from "mongoose";

// ── Types ───────────────────────────────────────────────────────────────────

export type LeadStatus = "new" | "contacted" | "in_progress" | "closed";

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: LeadStatus;
  notes: string;
  source: string;
  createdAt: Date;
}

// ── Schema ───────────────────────────────────────────────────────────────────

const LeadSchema = new Schema<ILead>(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    phone:   { type: String, required: true, trim: true },
    service: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, default: "" },
    status:  {
      type: String,
      enum: ["new", "contacted", "in_progress", "closed"],
      default: "new",
    },
    notes:  { type: String, default: "" },
    source: { type: String, default: "website" },
  },
  {
    timestamps: true, // adds createdAt + updatedAt automatically
  }
);

// ── Model (with hot-reload guard) ────────────────────────────────────────────

const Lead: Model<ILead> =
  mongoose.models.Lead ?? mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;