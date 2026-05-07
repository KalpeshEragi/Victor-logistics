import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAnalyticEvent extends Document {
  type: "page_view" | "click" | "form_submit";
  page: string;      // /services/sea-freight
  element?: string;   // hero-cta-button
  label?: string;     // "Book Now"
  metadata?: Record<string, any>;
  timestamp: Date;
}

const AnalyticEventSchema = new Schema<IAnalyticEvent>(
  {
    type: { 
      type: String, 
      required: true, 
      enum: ["page_view", "click", "form_submit"] 
    },
    page: { type: String, required: true },
    element: { type: String },
    label: { type: String },
    metadata: { type: Schema.Types.Mixed },
  },
  {
    timestamps: { createdAt: "timestamp", updatedAt: false },
  }
);

const AnalyticEvent: Model<IAnalyticEvent> =
  mongoose.models.AnalyticEvent ?? mongoose.model<IAnalyticEvent>("AnalyticEvent", AnalyticEventSchema);

export default AnalyticEvent;
