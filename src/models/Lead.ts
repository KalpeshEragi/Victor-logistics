import mongoose, { Schema, models } from "mongoose";

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    service: {
      type: String,
      enum: [
        "Sea Freight",
        "Air Freight",
        "Customs Clearance",
        "Containers",
        "Prefabricated Cabins",
        "Other",
      ],
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    consent: {
      type: Boolean,
      default: false, // for monthly updates
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Converted", "Closed"],
      default: "New",
    },
  },
  { timestamps: true }
);

export default models.Lead || mongoose.model("Lead", LeadSchema);
