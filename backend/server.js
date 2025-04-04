import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import authRoutes from './routes/authRoutes.js'


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get('/', (req,res)=> res.send((users)));
app.use('/api/auth',authRoutes);

app.use(cors({
    origin:"http://localhost:4000",
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}));

app.listen(port, ()=>console.log(`Server started on port:${port}`));

