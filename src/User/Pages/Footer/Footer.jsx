import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__col">
            <h3>About Us</h3>
            <p>Your shopping destination for...</p>
            {/* Add more details about your website */}
          </div>
          <div className="footer__col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#"><FaFacebook /> Facebook</a></li>
              <li><a href="#"><FaTwitter /> Twitter</a></li>
              <li><a href="#"><FaInstagram /> Instagram</a></li>
              {/* Add more social media links with icons */}
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <p>&copy; 2024 Your Shopping Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;