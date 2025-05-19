// src/pages/Categories.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "/src/styles/category.css";

export default function Categories() {
  const navigate = useNavigate();
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

  return (
    <Container className="categories mt-4">
      <h1>Job Categories</h1>
      <Row className="g-3">
        {categories.map((cat) => (
          <Col key={cat} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="h-100 text-center p-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/jobs/category/${encodeURIComponent(cat)}`)}
            >
              <Card.Body>
                <Card.Title>{cat}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
