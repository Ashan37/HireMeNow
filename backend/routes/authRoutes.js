import express from 'express';
import {register,login, logout,addjob,getjob, getCurrentUser} from '../controller/authController.js'

const authRouter=express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/addjob',addjob);
authRouter.get('/getjob',getjob);
authRouter.get('/me',getCurrentUser);

export default authRouter;