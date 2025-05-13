import React, { useState } from "react";
import Navbarr from "../components/Navbarr";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import "/src/styles/signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number|| !password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        {
          name,
          email,
          number,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert("User created successfully!");
        navigate("/signin");
      } else {
        alert(res.data.message || "Registration fail!");
      }
    } catch (error) {
      console.error("There was an error creating the user!", error);
      alert(res.data.message || "Network error!");
    }
  };

  return (
    <div className="signup-page">
    <Navbarr />
  
    {/* Main Section */}
    <section className="signup-section">
      <div className="signup-card">
        
        {/* Image Part */}
        <div className="signup-image-container">
          <img
            src="/src/assets/signup/image1.jpg"
            alt="Signup Illustration"
            className="signup-image"
          />
        </div>
  
        {/* Form Part */}
        <div className="signup-form-container">
          <div className="login_form">
            <form className="form" onSubmit={handleSubmit}>
              <h2 className="form-title">Create an Account</h2>
  
              <div className="input-group">
                <span className="input-group-text">
                  <i className="ri-user-line"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
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
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <span className="input-group-text">
                  <i class="ri-phone-line"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Phone Number"
                  name="number"
                  value={password}
                  onChange={(e) => setNumber(e.target.value)}
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
  
              <div className="button-group">
                <button type="submit" className="btn-register">
                  Register
                </button>
              </div>
  
              <p className="login-redirect">
                Already have an account?{" "}
                <span
                  className="login-link"
                  onClick={() => navigate("/signin")}
                >
                  Sign In
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
