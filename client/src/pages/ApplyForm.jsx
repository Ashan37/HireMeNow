// src/pages/ApplyForm.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "/src/styles/applyform.css";
import axios from "axios";

export default function ApplyForm() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !pdf) {
      alert("All fields are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("number", number);
      formData.append("pdf", pdf);

      const res = await axios.post(
        "http://localhost:4000/api/auth/applyJob",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        alert("You applied for this job successfully!");
        navigate("/profile");
      } else {
        alert(res.data.message || "Failed!");
      }
    } catch (error) {
      console.error("There was an error applying for this job!", error);
      alert("Network error!");
    }
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/auth/jobs/${jobId}`,
          { withCredentials: true }
        );
        setJob(res.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [jobId]);

  if (loading) return <p>Loading…</p>;
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="apply-container">
      <h1>Apply for: {job.title}</h1>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>{job.description}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="file"
          accept="application/pdf"
          name="pdf"
          onChange={(e) => setPdf(e.target.files[0])}
          required
        />
        {pdf && <p>Selected file: {pdf.name}</p>}

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
