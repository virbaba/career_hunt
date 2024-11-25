import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://virendersinghdev1:wrQDG2IKcRif93bI@careerhunt.gaouw.mongodb.net/?retryWrites=true&w=majority&appName=careerhunt", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit the process with failure
  }
}; 

export default connectDB;
