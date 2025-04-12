import React, { useState } from "react";
import Navbarr from "../components/Navbarr";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
   
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password} = formData;

    try {
      const res = await axios.post("http://localhost:4000/api/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);
     
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="signin">
      <Container-fluid>
        <Navbarr />
      </Container-fluid>

      <Container className="signin-container">
        <Row className="justify-content-center">
          <Col lg={5} md={7} sm={10} xs={12}>
            <div className="login_form">
              <form className="form" onSubmit={handleRegister}>
                <h2 className="form-title">Register</h2>

                {/* Name Input */}
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-user-line"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Input */}
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-mail-line"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Password Input */}
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-lock-line"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                {/* Buttons */}
                <div className="buttons">
                  <button type="submit" className="btn-register">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
