import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="page-footer font-small teal pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="social-icons">
          {/* Replace the 'your-social-media-links' with your actual social media profile URLs */}
          <a href="your-facebook-url" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={28} />
          </a>
          <a href="your-twitter-url" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} />
          </a>
          <a href="your-instagram-url" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="your-linkedin-url" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
      <div className="footer-text text-center py-3">
        © {new Date().getFullYear()} Skyleap | All rights reserved.
        <br />
        {/* Replace 'www.skyleap.com' with your app's actual website URL */}
        <a href="https://skyleap-app.netlify.app/">www.skyleap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
