import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function JobList() {
    const [jobs, setJobs] = useState([]); // ✅ initialize as empty array

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await axios.get("http://localhost:4000/api/auth/getjob"); // ✅ use correct GET route
            setJobs(res.data);
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Job List</h1>
            {jobs.map((job) => ( // ✅ rename inner variable to avoid shadowing
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <h2>{job.company}</h2>
                    <h2>{job.location}</h2>
                    <h2>{job.salary}</h2>
                    <h2>{job.type}</h2>
                    <h2>{job.description}</h2>
                </div>
            ))}
        </div>
    );
}
