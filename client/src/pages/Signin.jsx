import React, { useState } from "react";
import Navbarr from "../components/Navbarr";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";
import '../styles/signin.css';
import axios from "axios";


export default function Signin() {
  const navigate=useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=async (e)=>{
    e.preventDefault();

    try{
      const res =await axios.post("http://localhost:4000/api/auth/login",{
        email,
        password,
      });
      localStorage.setItem("token",res.data.token);
      alert("Login successfully!");
      navigate('/aftersignin');
    }catch(error)
    {
      alert("Login failed!");
    }
  }


  return (
    <div className="signin">
      <Container-fluid>
        <Navbarr />
      </Container-fluid>
      <Container className="signin-container">
        <Row className="justify-content-center">
          <Col lg={5} md={7} sm={10} xs={12}>
            <div className="login_form">
              <form className="form" onSubmit={handleLogin}>
                <h2 className="form-title">Login</h2>

                {/* Email Input */}
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-mail-line"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
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
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>

                {/* Forgot Password */}
                <div className="forgot-password">
                  <Link to="#">Forgot Password?</Link>
                </div>

                {/* Buttons */}
                <div>
                  <button type="submit" className="btn-login outline-primary">
                    Login
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
