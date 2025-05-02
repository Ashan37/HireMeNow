import React from 'react';
import Navbarr from '../components/Navbarr';
import Footer from '../components/Footer';
import HeroSlider2 from '../components/HeroSlider2';
import '/src/styles/about.css'; 

export default function About() {
  return (
    <div>
      <Navbarr />
      <HeroSlider2 />

      <main>
        {/* Hero Section */}
        <section className="about-hero text-center py-5">
          <div className="container">
            <h1 className="display-4 text-primary mb-3">About Us</h1>
            <p className="lead text-muted">
              We connect top talent with world-class employers. Our mission is to simplify job hunting and hiring with a modern, efficient, and people-focused approach.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-5 bg-light">
          <div className="container d-flex flex-column flex-md-row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="h3 text-primary mb-3">Our Mission</h2>
              <p className="text-muted">
                To bridge the gap between ambition and opportunity by providing an intuitive platform that makes recruitment effortless and effective for both candidates and employers.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="src/assets/about/image3.jpg" alt="Our Mission" className="img-fluid rounded shadow" />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-5">
          <div className="container d-flex flex-column flex-md-row align-items-center">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="src/assets/about/image2.jpg" alt="Our Vision" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h2 className="h3 text-primary mb-3">Our Vision</h2>
              <p className="text-muted">
                To become the go-to global platform for employment, fostering meaningful careers and helping companies build outstanding teams with ease and transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-5 bg-light text-center">
          <div className="container">
            <h2 className="h3 text-primary mb-5">Our Core Values</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Integrity</h5>
                    <p className="card-text text-muted">We maintain the highest standards of honesty and fairness in all interactions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Innovation</h5>
                    <p className="card-text text-muted">We embrace technology and creativity to stay ahead in the job market.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Excellence</h5>
                    <p className="card-text text-muted">We strive to provide the best user experience and top-notch service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
