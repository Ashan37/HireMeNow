import React, { useState } from "react";
import Navbarr from "../components/Navbarr";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../styles/signup.css";

export default function Signup() {

  const navigate=useNavigate();

  const [formData, setFormData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const handleRegister=async (e)=>{
    e.preventDefault();
    const {name,email,password,confirmPassword}=formData;

    if(password!==confirmPassword){
      alert("Password do not match!");
      return;
    }
    try{
      const res=await axios.post("http://localhost:4000/api/register",{
        name,
        email,
        password,
      });
      alert(res.data.message);
      navigate("/signin");
    }catch(err){
      alert(err.response?.data?.message||"Registraion faild");
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
              <form className="form">
                <h2 className="form-title">Login</h2>

                <div className="input-group">
                  <span className="input-group-text">
                  <i class="ri-user-line"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
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
                  />
                </div>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ri-lock-line"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-enter Password"
                  />
                </div>

                {/* Buttons */}
                <div className="buttons">
                 <Link to={'/signin'}><button type="submit" className="btn-login">Login</button></Link> 
                  <button type="button" className="btn-register">Register</button>
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
