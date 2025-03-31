import React from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="sb__footer section__padding">
        
        
        <div className="sb__footer-links">
          
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <Link to="/about"><p>About Us</p></Link>
            <Link to="/careers"><p>Careers</p></Link>
            <Link to="/press"><p>Press</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
          </div>

          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <Link to="/blog"><p>Blog</p></Link>
            <Link to="/help"><p>Help Center</p></Link>
            <Link to="/guides"><p>Guides</p></Link>
            <Link to="/faq"><p>FAQ</p></Link>
          </div>

          <div className="sb__footer-links_div">
            <h4>Legal</h4>
            <Link to="/terms"><p>Terms & Conditions</p></Link>
            <Link to="/privacy"><p>Privacy Policy</p></Link>
            <Link to="/security"><p>Security</p></Link>
            <Link to="/cookies"><p>Cookie Policy</p></Link>
          </div>

          <div className="sb__footer-links_div">
            <h4>Follow Us</h4>
            <div className="socialmedia">
              <a href="mailto:support@codeinn.com" target="_blank" rel="noopener noreferrer">
                <i className="ri-mail-fill"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </div>

        </div>

        
        <div className="sb__footer_below">
          <p>© {new Date().getFullYear()} Copyright. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
