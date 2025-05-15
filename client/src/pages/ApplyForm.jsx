import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function ApplyForm() {
    const {jobId}=useParams();
    const [job,setJob]=useState();

    useEffect(()=>{
        const fetchJob=async()=>{
            const res=await axios.get(`http://localhost:4000/api/auth/getjob/${jobId}`);
            setJob(res.data);
        };
        fetchJob();

    },[jobId]);
    if(!job)return <p>Loading....</p>;
  return (
    <div>
      <h1>Apply for: {job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p>{job.description}</p>

      {/* Here you can add a form to collect user application data */}
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Cover Letter"></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  )
}

