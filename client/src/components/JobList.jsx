import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '/src/styles/jobList.css'; 

export default function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await axios.get("http://localhost:4000/api/auth/getjob");
            setJobs(res.data);
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
                        <button className="apply-btn">Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
