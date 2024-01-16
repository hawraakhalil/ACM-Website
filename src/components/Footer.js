import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-section">
        <img src="images/aub_logo.jpg" alt="Image" />
      </div>
      <div className="center-section">
        <h4>Pages</h4>
        <ul>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
          <li>
            <Link to="/Committees">Committees</Link>
          </li>
          <li>
            <Link to="/Board">Board</Link>
          </li>
          <li>
            <Link to="/OpenSources">Open Source</Link>
          </li>
        </ul>
        <small className="website-rights">© ACM at AUB 2024</small>
      </div>
      <div className="right-section">
        <p>Follow us on social media</p>
        <div className="social-icons">
        <Link
          class='social-icon-link instagram'
          to='https://www.instagram.com/acm_aub/'
          target='_blank'
          aria-label='Instagram'
          >
          <i class='fab fa-instagram' />
          </Link>
          <Link
          class='social-icon-link Linkedin'
          to='https://www.linkedin.com/company/aub-acm/mycompany/'
          target='_blank'
          aria-label='LinkedIn'
          >
          <i class='fab fa-linkedin' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;