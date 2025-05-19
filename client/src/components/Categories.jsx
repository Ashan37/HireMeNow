import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '/src/styles/category.css';

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

  const onClickCategory = (cat) => {
    // push a “Jobs by Category” page
    navigate(`/jobs/category/${encodeURIComponent(cat)}`);
  };

  return (
    <Container className="categories">
      <h1>Job Categories</h1>
      <Row>
        {categories.map(cat => (
          <Col
            key={cat}
            xs={12} sm={6} md={4} lg={3}
            className="category_col"
            style={{ cursor: 'pointer' }}
            onClick={() => onClickCategory(cat)}
          >
            <h4>{cat}</h4>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
