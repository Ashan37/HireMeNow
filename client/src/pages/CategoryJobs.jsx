// src/pages/CategoryJobs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "/src/styles/categoryJobs.css";

export default function CategoryJobs() {
  const { category } = useParams(); 
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchByCategory = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/auth/jobs/category/${encodeURIComponent(
            category
          )}`,
          { withCredentials: true }
        );

        setJobs(res.data);
      } catch (err) {
        console.error("Error loading category:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchByCategory();
  }, [category]);

  return (
    
    <Container className="category-jobs">
      <Row className="mb-4">
        <Col>
          <Link to="/">
            <Button variant="outline-secondary">
              &larr; Back to Categories
            </Button>
          </Link>
        </Col>
      </Row>

      <h2>{category} Jobs</h2>
      {loading ? (
        <p>Loading jobs…</p>
      ) : jobs.length > 0 ? (
        <Row>
          {jobs.map((job) => (
            <Col key={job._id} xs={12} md={6} lg={4} className="job-card">
              <h5>{job.title}</h5>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <Link to={`/apply/${job._id}`}>
                <Button variant="primary" size="sm">
                  Apply
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No jobs found in {category}.</p>
      )}
    </Container>
  );
}
