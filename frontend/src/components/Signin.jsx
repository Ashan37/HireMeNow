import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

export default function Signin() {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center bg-light">
      <Row className="w-100 d-flex justify-content-center align-items-center">
        {/* Left Side - Login Form */}
        <Col lg={5} md={6} sm={12} className="d-flex justify-content-center">
          <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
            <Card.Body>
              {/* Logo Centered */}
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="src/assets/logos/logo.jpg"
                  alt="Logo"
                  className="mb-2"
                  style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                />
              </div>

              <Card.Title className="mb-4 text-center">Login</Card.Title>

              {/* Form */}
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRemember">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-2">
                  Login
                </Button>
                <Button variant="secondary" type="button" className="w-100">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side - Image */}
        <Col lg={7} md={6} sm={12} className="d-none d-md-flex justify-content-center align-items-center">
          <img
            src="src/assets/images/loginpage.jpg"
            alt="Login Page Illustration"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
