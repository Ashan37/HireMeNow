
import express from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";


dotenv.config();


const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // handle form-data
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRouter);

// Database connect
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hiremenow")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
