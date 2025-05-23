import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import jobModel from '../models/jobModel.js';
import applicationModel from '../models/applicationModel.js';

/*-----------------Apply application part----------------- */
export const applyJob=async (req,res)=>{
  const {name,email,number}=req.body;
  const pdf=req.file;

  if(!name||!email||!number||!pdf){
    return res.json({success:false,message:'Missing Details!'});
  }

  try{
    const newApplication=new applicationModel({
      name,
      email,
      number,
      pdf:{
        data: file.buffer,
        mimetype: file.mimetype,
        filename: file.originalname,
      },
    });
    await newApplication.save();
    res.json({success:true, message:'Application save to database'});
  }catch (error) {
    res.json({ success: false, message: error.message });
  }
}
/*-----------------Job Adding part----------------- */
export const addjob = async (req, res) => {
  const { title, company, location, salary, type, category, description } = req.body;
  if (!title || !company || !location || !salary || !type || !category || !description) {
    return res.status(400).json({ success: false, message: 'Missing Details' });
  }
  try {
    const job = new jobModel({ title, company, location, salary, type, category, description });
    await job.save();
    return res.json({ success: true, message: 'Job added successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/*-----------------Get All Jobs----------------- */
export const getjob = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    return res.json(jobs);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/*-----------------Get Job by ID----------------- */
export const getJobById = async (req, res) => {
  try {
    const job = await jobModel.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    return res.json(job);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/*-----------------Get Jobs by Category----------------- */
export const getJobsByCategory = async (req, res) => {
  try {
    const jobs = await jobModel.find({ category: req.params.category });
    return res.json(jobs);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/*-----------------Register----------------- */
export const register = async (req, res) => {
  const { name, email, number, password } = req.body;
  if (!name || !email || !number || !password) {
    return res.json({ success: false, message: 'Missing Details' });
  }
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, number, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/*-----------------Get Current User----------------- */
export const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ success: false, message: 'No token provided' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id).select('-password');
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/*-----------------Login----------------- */
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ success: false, message: 'Email and password are required' });
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'Invalid email' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/*-----------------Logout----------------- */
export const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    });
    return res.status(200).json({ success: true, message: 'Logged Out' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
