import React, { useState } from "react";
import Navbarr from "../components/Navbarr";
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
      navigate("/profile");
    }catch(error)
    {
      alert("Login failed!");
    }
  }


  return (
    <div className="signin-page">
  <Navbarr />

  {/* Main Section */}
  <section className="signin-section">
    <div className="signin-card">

      {/* Image Part */}
      <div className="signin-image-container">
        <img
          src="/src/assets/signin/image1.jpg" 
          alt="Signin Illustration"
          className="signin-image"
        />
      </div>

      {/* Form Part */}
      <div className="signin-form-container">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Forgot Password */}
            <div className="forgot-password">
              <Link to="#">Forgot Password?</Link>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button type="submit" className="btn-login">
                Login
              </button>
            </div>

            {/* Signup Redirect */}
            <p className="signup-redirect">
              Don't have an account?{" "}
              <span
                className="signup-link"
                onClick={() => navigate("/signup")}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>

    </div>
  </section>

  <Footer />
</div>

  );
}
