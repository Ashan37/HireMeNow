import React from 'react';
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import HeroSlider2 from '../components/HeroSlider2';
import '/src/styles/contact.css'; // Custom styles

export default function Contact() {
  return (
    <div>
      
        <Navbarr />
      

      <HeroSlider2 />

      <section className="contact-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">We’re here to help you hire or get hired!</p>
          </div>

          <div className="row">
            {/* Contact Info */}
            <div className="col-md-5 mb-4">
              <div className="contact-info">
                <h4>Contact Information</h4>
                <p><strong>Email:</strong> contact@yourjobsite.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Talent Ave, Recruit City, USA</p>

                <div className="social-links mt-4">
                  <a href="#" className="me-3">LinkedIn</a>
                  <a href="#" className="me-3">Twitter</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <form className="contact-form">
                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Your Full Name" required />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Your Email Address" required />
                </div>
                <div className="mb-3">
                  <label>Subject</label>
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label>Message</label>
                  <textarea className="form-control" rows="5" placeholder="Your Message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary px-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
        <Footer />
      
    </div>
  );
}
