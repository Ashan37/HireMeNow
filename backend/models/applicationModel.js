import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  pdf: {
    data: Buffer,
    mimetype: String,
    filename: String,
  },
});

const applicationModel =
  mongoose.models.application || mongoose.model("application", applicationSchema);

export default applicationModel;
