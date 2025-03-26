import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import mongoose, { connect } from "mongoose";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoutes from './routes/authRoutes.js'

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get('/', (req,res)=> res.send("API Working"));


app.listen(port, ()=>console.log(`Server started on port:${port}`));

