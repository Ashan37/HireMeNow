import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Navbars from "./Navbar";
import Footer from "./Footer";

export default function Signin() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right,rgb(197, 226, 245),rgb(49, 155, 243))",

        color: "white",
      }}
    >
      <Container-fluid>
        <Navbars />
      </Container-fluid>

      <Container fluid className="min-vh-100 d-flex align-items-center">
        <Row className="w-100 d-flex justify-content-center align-items-center">
          <Col
            lg={6}
            md={6}
            sm={12}
            className=" d-md-flex justify-content-center align-items-center "
          >
            <img
              src="src/assets/images/login.png"
              alt="Login Page Illustration"
              className="img-fluid"
              style={{ maxWidth: "auto", height: "520px" }}
            />
          </Col>

          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center bg-transparent"
          >
            <Card
              className="p-4 shadow-sm"
              style={{ width: "100%", maxWidth: "50%", height: "520px" }}
            >
              <Card.Body>
                {/* Logo Centered */}
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src="src/assets/logos/logo.jpg"
                    alt="Logo"
                    className="mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
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
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formRemember">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Button
                    variant="outline-info"
                    type="submit"
                    className="w-100 mb-2"
                  >
                    Login
                  </Button>
                  <Button variant="secondary" type="button" className="w-100">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container-fluid>
        <Footer/>
      </Container-fluid>
    </div>
  );
}
