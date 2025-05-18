import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobList from "../components/JobList";
import '../styles/profile.css'
import Categories from "../components/Categories";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/auth/me", {
          withCredentials: true,
        });
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          navigate("/signin");
        }
      } catch (error) {
        console.error(error);
        navigate("/signin");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = () => {
    navigate("/addjob");
  };

  return (
    <div>
      <div className="dashboard-container">
        {user ? (
          <>
            <h2 className="welcome-message">Welcome Back, {user.name}!</h2>
            <button className="post-job-button" onClick={handleChange}>
              Post a Job
            </button>

          </>
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </div>

      {/* Categories part */}
     <Categories/>

      <JobList />
      <Footer />
    </div>
  );
}
