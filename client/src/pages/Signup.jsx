import React, { useState } from "react";
import Navbarr from "../components/Navbarr";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register", 
        {
        name,
        email,
        password,
      },
      {
        withCredentials: true, 
      }
    );

    if(res.data.success){
      alert("User created successfully!");
      navigate("/signin"); 
    }
    else{
      alert(res.data.message||"Registration fail!");
    }

      
    } catch (error) {
      console.error("There was an error creating the user!", error);
      alert(res.data.message || "Network error!");
    }
  };

  return (
    <div className="signin">
      <Container fluid>
        <Navbarr />
      </Container>

      <Container className="signin-container">
        <Row className="justify-content-center">
          <Col lg={5} md={7} sm={10} xs={12}>
            <div className="login_form">
              <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title">Register</h2>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-user-line"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

               
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-mail-line"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

          
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-lock-line"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

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

      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}
