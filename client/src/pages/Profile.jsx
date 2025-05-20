import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobList from "../components/JobList";
import "../styles/profile.css";
import Categories from "../components/Categories";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
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

    const fetchUserJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/jobs/user", {
          withCredentials: true,
        });
        setJobs(res.data.jobs || []);
      } catch (error) {
        console.error("Failed to load user jobs", error);
      }
    };

    fetchUser();
    fetchUserJobs();
  }, [navigate]);

  const handlePostJob = () => navigate("/addjob");
  const handleEditProfile = () => navigate("/edit-profile");
  const handleLogout = async () => {
    await axios.get("http://localhost:4000/api/auth/logout", {
      withCredentials: true,
    });
    navigate("/signin");
  };

  return (
    <div className="profile-page">
      <div className="dashboard-container">
        {user ? (
          <>
            <div className="profile-header">
              <div className="profile-info">
                <h2>Welcome Back, {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.number || "N/A"}</p>
              </div>
              <div className="profile-actions">
                <button className="profile-btn" onClick={handlePostJob}>
                  Post a Job
                </button>
                <button className="profile-btn" onClick={handleEditProfile}>
                  Edit Profile
                </button>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>

            {jobs.length > 0 && (
              <div className="user-jobs">
                <h3>Your Posted Jobs</h3>
                <ul>
                  {jobs.map((job) => (
                    <li key={job._id}>{job.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </div>

      <Categories />
      <JobList />
      <Footer />
    </div>
  );
}
