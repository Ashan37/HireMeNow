import express from "express";
import multer from "multer";
import {
  register,
  login,
  logout,
  addjob,
  getjob,
  getCurrentUser,
  getJobById,
  getJobsByCategory,
  applyJob,
} from "../controller/authController.js";

const authRouter = express.Router();

// Setup multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Auth routes
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", getCurrentUser);

// Job routes
authRouter.post("/jobs", addjob);
authRouter.get("/jobs", getjob);
authRouter.get("/jobs/:id", getJobById);
authRouter.get("/jobs/category/:category", getJobsByCategory);

// Application route
authRouter.post("/applyJob", upload.single("pdf"), applyJob);

export default authRouter;
