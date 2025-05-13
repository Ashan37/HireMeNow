import React, { useEffect, useState } from "react";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobList from "../components/JobList";
import '../styles/profile.css'

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/auth/me", {
          withCredentials: true,
        });
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          navigate("/signin");
        }
      } catch (error) {
        console.error(error);
        navigate("/signin");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = () => {
    navigate("/addjob");
  };

  return (
    <div>
      <Navbarr />
      <div className="dashboard-container">
        {user ? (
          <>
            <h2 className="welcome-message">Welcome Back, {user.name}!</h2>
            <button className="post-job-button" onClick={handleChange}>
              Post a Job
            </button>
          </>
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </div>

      {/* Categories part */}
      <Container className="categories">
        <div className="categories_head">
          <h1>Job Categories</h1>
        </div>
        <Row className="categories_row">
          <Col className="category_col">
            <h4>Healthcare</h4>
          </Col>
          <Col className="category_col">
            <h4>Information Technology</h4>
          </Col>
          <Col className="category_col">
            <h4>Education</h4>
          </Col>
          <Col className="category_col">
            <h4>Finance</h4>
          </Col>
        </Row>
        <Row className="categories_row">
          <Col className="category_col">
            <h4>Hospitality & Tourism</h4>
          </Col>
          <Col className="category_col">
            <h4>Engineering</h4>
          </Col>
          <Col className="category_col">
            <h4>Construction</h4>
          </Col>
          <Col className="category_col">
            <h4>Retail</h4>
          </Col>
        </Row>
        <Row className="categories_row">
          <Col className="category_col">
            <h4>Marketing</h4>
          </Col>
          <Col className="category_col">
            <h4>Manufacturing</h4>
          </Col>
          <Col className="category_col">
            <h4>Legal</h4>
          </Col>
          <Col className="category_col">
            <h4>Transportation & Logistics</h4>
          </Col>
        </Row>
      </Container>

      <JobList />
      <Footer />
    </div>
  );
}
