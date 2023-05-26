import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><a href="#">Our Schools</a></li>
          <li><a href="#">Additional Links</a></li>
          <li><a href="#">Message from our Founder</a></li>
          <li><a href="#">Vision, Mission &amp;</a></li>
          <li><a href="#">Find a School</a></li>
        </ul>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>We Are GEMS</h4>
          <p>Franchisee School</p>
          <p>KHDA Outstanding</p>
          <p>Our Promise</p>
          <p>School Collaboration</p>
        </div>
        <div className="footer-column">
          <h4>Values</h4>
          <p>Schools</p>
          <p>What our Parents Say</p>
          <p>Our Schools</p>
          <p>Operational School</p>
        </div>
        <div className="footer-column">
          <h4>A 60 Year Legacy</h4>
          <p>Our Leadership</p>
          <p>Accreditations &amp;</p>
          <p>News &amp; Events</p>
          <p>School Real Estate</p>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Partner with Us</p>
          <p>Investors</p>
          <p>Education Consultants</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
