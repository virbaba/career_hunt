import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";

// Initialize app
const app = express();
dotenv.config();
const PORT = 1001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
// Configure CORS
const allowedOrigins = ['http://localhost:5173', 'https://career-hunt.onrender.com'];
app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Include cookies or authorization headers if needed
}));


// Connect to MongoDB
connectDB();

// Static Files Middleware (for production)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Catch-All Route (for React Router in frontend)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
