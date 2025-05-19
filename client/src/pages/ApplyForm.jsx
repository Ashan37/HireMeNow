import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '/src/styles/applyform.css';
import axios from 'axios';

export default function ApplyForm() {
  const { jobId } = useParams();
  const [job, setJob]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/auth/jobs/${jobId}`,
          { withCredentials: true }
        );
        console.log('Fetched job:', res.data);
        setJob(res.data);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [jobId]);

  if (loading) return <p>Loading…</p>;
  if (!job)    return <p>Job not found.</p>;

  return (
    <div className="apply-container">
      <h1>Apply for: {job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p>{job.description}</p>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Cover Letter"></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
