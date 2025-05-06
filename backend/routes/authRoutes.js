import express from 'express';
import {register,login, logout,addjob} from '../controller/authController.js'

const authRouter=express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/addjob',addjob);

export default authRouter;