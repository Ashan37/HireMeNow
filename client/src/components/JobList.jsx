import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '/src/styles/jobList.css'; 
import { useNavigate } from 'react-router-dom';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // 1. Accept jobId as parameter
  const handleChange = (jobId) => {
    // 2. Navigate to /apply/:jobId
    navigate(`/apply/${jobId}`);
  }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/auth/getjob");
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="joblist-container">
      <h1 className="joblist-title">Featured Jobs</h1>
      <div className="joblist-grid">
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p className="job-description">{job.description}</p>

            {/* 3. Pass a function to onClick, not the result of calling handleChange */}
            <button
              className="apply-btn"
              onClick={() => handleChange(job._id)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
