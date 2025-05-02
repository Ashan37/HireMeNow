import React from 'react';
import '/src/styles/aboutheroslider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeroSlider2() {
  return (
    <section className="hero-slider">
      <img
        src="/src/assets/about/image1.jpg"
        alt="Find Your Dream Job"
      />
      <div className="hero-overlay">
        <h1>Empowering Careers, Connecting Talent</h1>
        <p>
          Discover new opportunities and take your career to the next level with our trusted hiring platform.
        </p>
        <a href="#jobs" className="btn btn-primary btn-lg">
          Browse Jobs
        </a>
      </div>
    </section>
  );
}
