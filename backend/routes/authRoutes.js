import express from 'express';
import {
  register,
  login,
  logout,
  addjob,
  getjob,
  getCurrentUser,
  getJobById,
  getJobsByCategory,
} from '../controller/authController.js';

const authRouter = express.Router();

// Auth Routes
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/me', getCurrentUser);

// Job Routes (corrected paths)
authRouter.post('/jobs', addjob);                          // Add a job
authRouter.get('/jobs', getjob);                           // Get all jobs
authRouter.get('/jobs/:id', getJobById);                   // Get job by ID
authRouter.get('/jobs/category/:category', getJobsByCategory); // Get jobs by category

export default authRouter;
