import React from "react";
import Footer from "../components/Footer";
import Heroslider from "../components/Heroslider";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "/src/styles/home.css";
import Categories from "../components/Categories";

export default function Home() {

  const navigate=useNavigate();
  const handleChange=()=>{
    navigate('/signup');
  };
  return (
    <div>
      <Heroslider />

      {/* intro section */}
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

      {/* Categories part */}
      <Categories/>

      {/* Card part */}
      <section className="middle-card-container">
        <div className="middle-card">
          <div className="middle-card-content">
            <h1>
              Find the talent
              <br />
              to grow your business
            </h1>
            <button className="middle-card-button" onClick={handleChange}>Get Started</button>
          </div>
          <div className="middle-card-image">
            <img src="src/assets/home/image1.png" alt="man" />
          </div>
        </div>
      </section>

      {/* step about how to find a job */}

      <section className="steps-part">
        <div className="steps-container">
          {/* LEFT SIDE: STEPS CONTENT */}
          <div className="steps-content">
            <div className="steps-header">
              <h1 className="steps-title">
                Find your next job in 3 easy steps
              </h1>
              <p className="steps-description">
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancer.
              </p>
            </div>

            <div className="steps-list">
              <div className="step-item">
                <h3 className="step-title">1. Register an account</h3>
                <p className="step-description">
                  Sign up with your email and complete your profile to get
                  started on your job hunt journey.
                </p>
              </div>
              <div className="step-item">
                <h3 className="step-title">2. Find your job</h3>
                <p className="step-description">
                  Browse thousands of job listings tailored to your skills and
                  preferences.
                </p>
              </div>
              <div className="step-item">
                <h3 className="step-title">3. Apply for job</h3>
                <p className="step-description">
                  Submit your application with a single click and track your
                  progress easily.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="steps-image">
            <img
              src="src/assets/home/image2.jpg"
              alt="Job Steps"
              className="steps-img"
            />
          </div>
        </div>
      </section>

      {/* Carrer tips part */}
      <Container className="career-tips">
        <h1 className="career-tips-title">Quick Career Tips</h1>
        <p>To achieve your gaols</p>
        <Row className="career-tips-row">
          <Col lg="3" md="6" sm="12" className="career-tip-card">
            <div className="career-tip-image">
              <img src="src/assets/home/tips/image1.jpg" alt="tip1" />
            </div>
            <div className="career-tip-content">
              <h5>Build Your Network</h5>
              <p>
                Connecting with the right people can fast-track your career. Use
                professional platforms, attend industry events, and never
                hesitate to reach out.
              </p>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12" className="career-tip-card">
            <div className="career-tip-image">
              <img src="src/assets/home/tips/image2.jpg" alt="tip2" />
            </div>
            <div className="career-tip-content">
              <h5>Upskill Regularly</h5>
              <p>
                The job market rewards those who stay current. Invest time in
                learning new technologies, certifications, or soft skills to
                stay ahead.
              </p>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12" className="career-tip-card">
            <div className="career-tip-image">
              <img src="src/assets/home/tips/image3.jpg" alt="tip3" />
            </div>
            <div className="career-tip-content">
              <h5>Showcase Your Strengths</h5>
              <p>
                Your resume and interviews should highlight what makes you stand
                out. Be clear, confident, and focus on results you've achieved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Part */}

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
