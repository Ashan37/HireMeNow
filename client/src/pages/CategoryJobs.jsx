// src/pages/CategoryJobs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "/src/styles/categoryJobs.css";

export default function CategoryJobs() {
  const { category } = useParams(); 
  const [jobs, setJobs]       = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchByCategory = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/auth/jobs/category/${encodeURIComponent(category)}`,
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
    <Container className="category-jobs mt-4">
      <Row className="mb-3">
        <Col>
          <Link to="/">
            <Button variant="outline-secondary">&larr; Back to Categories</Button>
          </Link>
        </Col>
      </Row>

      <h2 className="mb-4">{category} Jobs</h2>

      {loading ? (
        <p>Loading jobs…</p>
      ) : jobs.length > 0 ? (
        <Row className="g-4">
          {jobs.map((job) => (
            <Col key={job._id} xs={12} md={6} lg={4}>
              <Card className="job-card h-100">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>
                    <strong>Company:</strong> {job.company}
                    <br />
                    <strong>Location:</strong> {job.location}
                  </Card.Text>
                  <Link to={`/apply/${job._id}`}>
                    <Button variant="primary" size="sm">
                      Apply
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No jobs found in {category}.</p>
      )}
    </Container>
  );
}
