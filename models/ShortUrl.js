import mongoose from "mongoose";

const { Schema } = mongoose;

const pUrlsSchema = new Schema(
  {
    uuid: {
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

export default mongoose.models.Pubilc_Urls ||
  mongoose.model("Pubilc_Urls", pUrlsSchema);
