import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not set");
}

mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err.message);
});

const projectSchema = new mongoose.Schema({
  titleEn: { type: String, required: true },
  titleAr: { type: String, required: true },
  titleHe: { type: String, required: true },
  descEn: { type: String, required: true },
  descAr: { type: String, required: true },
  descHe: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  sortOrder: { type: Number, required: true, default: 0 },
});

export const ProjectModel = mongoose.model("Project", projectSchema);
