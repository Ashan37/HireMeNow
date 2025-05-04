import React, { useState } from "react";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import axios from "axios";

const AddJobVacancyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/jobs", formData);
      if (response.status === 201) {
        setMessage("Job vacancy added successfully!");
        setFormData({
          title: "",
          company: "",
          location: "",
          salary: "",
          type: "",
          description: "",
        });
      } else {
        setMessage("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <Navbarr/>
    <div className="card shadow mt-5 mx-auto border-primary" style={{ maxWidth: "700px" }}>
      <div className="card-header bg-primary text-white text-center">
        <h4 className="mb-0">Add a New Job Vacancy</h4>
      </div>
      <div className="card-body bg-light">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control border-primary"
              placeholder="Enter the job title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
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
                value={formData.location}
                onChange={handleChange}
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
                value={formData.salary}
                onChange={handleChange}
                className="form-control border-primary"
                placeholder="e.g., $60,000/year"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Job Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
              className="form-control border-primary"
              rows="4"
              placeholder="Enter a detailed job description"
              required
            ></textarea>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
              {loading ? "Submitting..." : "Post Job"}
            </button>
          </div>

          {message && (
            <div className="alert alert-info text-center mt-3" role="alert">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default AddJobVacancyForm;
