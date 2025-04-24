import React from "react";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import Heroslider from "../components/Heroslider";
import { Container, Row, Col } from "react-bootstrap";
import "/src/styles/home.css";



export default function Home() {
  return (
    <div>
      <Container-fluid>
        <Navbarr />
      </Container-fluid>
      <Heroslider />
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-title">
            Welcome to <span className="highlight">HireMeNow</span>
          </h1>
          <p className="intro-subtitle">
            Empowering job seekers and companies to connect seamlessly.
            <br />
            Whether you're hiring or hunting,{" "}
            <span className="highlight">HireMeNow</span> makes the process
            simple, fast, and efficient.
          </p>
        </div>
      </section>

      <Container className="job-section">
        <Row>
          <Col lg="6" md="6" sm="12" className="job-card seeker-card">
            <h1 className="card-title">For Job Seekers</h1>
            <div className="card-content">
              <p>
                Looking for your next big career move? Our platform connects job
                seekers with top employers across industries. Browse hundreds of
                verified job listings, filter by location, role, or experience
                level, and apply in just a few clicks. Whether you're starting
                fresh or leveling up, your next opportunity is just a search
                away.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6" sm="12" className="job-card employer-card">
            <h1 className="card-title">For Employers</h1>
            <div className="card-content">
              <p>
                Post jobs, find top talent, and streamline your hiring process
                with our easy-to-use platform. Whether you're a startup or an
                established company, reach qualified candidates actively looking
                for roles in your industry. Create job listings, manage
                applications, and connect with potential hires — all in one
                place.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to find your next opportunity?
        </h2>
        <p className="mb-6">
          Join thousands of users already hiring and getting hired on HireMeNow.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Find a Job
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
            Post a Job
          </button>
        </div>
      </section>

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

      <Section>
        <div>
        <div>
          <h1>find the talent needed to<br/>get your business growing</h1>
          <div>
          <button>Get started</button>
            </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        </div>
      </Section>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
