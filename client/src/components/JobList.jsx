import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white py-10 px-4">
            <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-10 tracking-tight">
                Featured Jobs
            </h1>
            <div className="grid gap-8 max-w-5xl mx-auto">
                {jobs.map((job) => (
                    <div 
                        key={job._id} 
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-transform transform hover:scale-105"
                    >
                        <h2 className="text-3xl font-bold text-blue-700 mb-2">{job.title}</h2>
                        <p className="text-gray-700 mb-1"><span className="font-semibold text-blue-600">Company:</span> {job.company}</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold text-pink-600">Location:</span> {job.location}</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold text-green-600">Salary:</span> {job.salary}</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold text-yellow-600">Type:</span> {job.type}</p>
                        <p className="text-gray-800 mt-4">{job.description}</p>
                        <button className="mt-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
