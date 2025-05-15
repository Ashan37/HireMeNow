import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false); // ✅ Added loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !company || !location || !salary || !type) {
      alert("Fill all the details!");
      return;
    }

    setLoading(true); // ✅ Start loading

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/addjob",
        {
          title,
          company,
          location,
          salary,
          type,
          description,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert("Job added successfully!");
        navigate("/addjob");
      } else {
        alert(res.data.message || "Failed!");
      }
    } catch (error) {
      console.error("There was an error adding a job!", error);
      alert(error.response?.data?.message || "Error!");
    } finally {
      setLoading(false); // ✅ Stop loading regardless of success/failure
    }
  };

  return (
    <div>
      
      <div
        className="card shadow mt-5 mx-auto border-primary"
        style={{ maxWidth: "700px" }}
      >
        <div className="card-header bg-primary text-white text-center">
          <h4 className="mb-0">Add a New Job Vacancy</h4>
        </div>
        <div className="card-body bg-light">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Job Title</label>
              <input
                className="form-control border-primary"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the job title"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Company Name</label>
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="form-control border-primary"
                placeholder="Enter company name"
                required
              />
            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label className="form-label fw-bold">Location</label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control border-primary"
                  placeholder="e.g., Remote, New York"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="form-control border-primary"
                  placeholder="e.g., $60,000/year"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Job Type</label>
              <select
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="form-select border-primary"
                required
              >
                <option value="">Select type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Job Description</label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control border-primary"
                rows="4"
                placeholder="Enter a detailed job description"
                required
              ></textarea>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Post Job"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
