import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';


{/*-----------------Register part----------------- */}

export const register=async (req,res)=>{

    const{name,email,password}=req.body;

    if(!name || !email || !password){
        return res.json({success:false,message:'Missing Details'})
    }
    try{
        const existingUser=await userModel.findOne({email})

        if(existingUser){
            return res.json({success:false, message: "User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=new userModel({name,email,password:hashedPassword});
        await user.save();

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7D'});

        res.cookie('token',token, {
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production'? 'none' : 'strict',
            maxAge:7*24*60*60*1000
        });

       

        return res.json({
            success:true,
            message:"Registration successful",
        });

    }catch(error){
        res.json({success:false, message:error.message})
    }
    
};
{/*----------------------Login function-------------- */}

export const login=async (req,res)=>{

    const{email,password}=req.body;

    if(!email||!password){
        return res.json({success:false, message:'Email and password are required'})
    }
    try{
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:'Invalid email'});
        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false,message:'Invalid password'});
        }

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7D'});

        res.cookie('token',token, {
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production'? 'none' : 'strict',
            maxAge:7*24*60*60*1000
        });

        return res.json({success:true});


    }catch(error){
        return res.json({success:false,message:error.message});
    }
};

{/*----------------------Logout function-------------- */}

export const logout=async (req,res)=>{
    try{

        res.clearCookie('token',{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production'? 'none' : 'strict',
        });

        return res.json({success:true, message:"Logged Out"});

    }catch(error){
        return res.json({success:false,message:error.message});
    }
}