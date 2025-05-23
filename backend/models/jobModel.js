import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    createdAt:{type:Date,default:Date.now},
});

const jobModel=mongoose.models.job||mongoose.model('job',jobSchema);

export default jobModel;