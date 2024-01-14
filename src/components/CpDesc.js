import React from 'react';
import { Link } from 'react-router-dom';
import './CP_Desc.css';

const CpDesc = () => {
    return (
      <div className="committee-desc-container">
        <div className="text-section">
          <h1>acm CP</h1>
          <p>The Competitive Programming Committee is a platform to teach and train students for programming competitions and careers in the tech industry. It does this by leveraging the experience of advanced student competitors and experienced alumni to teach students and attract new talent, as well as hosting competitions and workshops. Check out our events{' '}
          <Link to="/Events" style={{ color: 'blue', textDecoration: 'underline' }}>here</Link>.
          </p>
        </div>
        <div className="banner-section">
          <img src="/images/cp_banner.jpg" alt="Rectangular Banner" />
        </div>
      </div>
    );
  };
  
  export default CpDesc;