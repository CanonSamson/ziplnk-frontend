import mongoose from "mongoose";

const { Schema } = mongoose;

const pUrlsSchema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    short_url: {
      type: String,
      required: true,
    },
    original_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.P_Urls || mongoose.model("P_Urls", pUrlsSchema);
