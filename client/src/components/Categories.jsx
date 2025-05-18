import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function Categories() {
  const categories = [
    "Healthcare",
    "Information Technology",
    "Education",
    "Finance",
    "Hospitality & Tourism",
    "Engineering",
    "Construction",
    "Retail",
    "Marketing",
    "Manufacturing",
    "Legal",
    "Transportation & Logistics",
  ];
  const [jobsByCategory, setJobsByCategory] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const loadJobs = async (cat) => {
    setSelectedCategory(cat);
    if (jobsByCategory[cat]) return;
    const { data } = await axios.get(
      `http://localhost:4000/api/auth/jobs/category/${encodeURIComponent(cat)}`,
      { withCredentials: true }
    );
    setJobsByCategory(prev => ({ ...prev, [cat]: data }));
  };

  return (
    <Container className="categories">
      <h1>Job Categories</h1>
      <Row>
        {categories.map(cat => (
          <Col key={cat} xs={12} sm={6} md={4} lg={3} onClick={() => loadJobs(cat)} className="category_col" style={{ cursor: 'pointer' }}>

            <h4>{cat}</h4>
          </Col>
        ))}
      </Row>
      {selectedCategory && (
        <div className="mt-4">
          <h3>{selectedCategory} Jobs</h3>
          <ul>
            {jobsByCategory[selectedCategory]?.length > 0 ? (
              jobsByCategory[selectedCategory].map(job => (
                <li key={job._id}><strong>{job.title}</strong> @ {job.company}</li>
              ))
            ) : (
              <p>No jobs found.</p>
            )}
          </ul>
        </div>
      )}
    </Container>
  );
}