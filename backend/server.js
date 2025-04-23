import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import authRoutes from './routes/authRoutes.js';

// ✅ ADD these imports for comment functionality
import commentRoutes from './routes/commentRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Serve image uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Mount the new comment routes
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes); // 👈 New line

app.listen(port, () => {
    console.log(`Server started on port:${port}`)
});
