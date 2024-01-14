import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="committees-container">
      <div className="top-section">
        <h2>Our Committees</h2>
        <p>At AUB ACM, we consider our committees the pillars upon which our aspirations stand. Our student branch is currently composed of 3 committees</p>
      </div>
      <div className="bottom-section">
        <div className="committee">
          <h3 className="cp_glow" >COMPETITIVE PROGRAMMING</h3>
          <img src='/images/cp_logo.jpg' alt="Committee 1" />
          <p style={{color:"#B00707"}}>Conquering Competitive Programming</p>
        </div>
        <div className="committee">
          <h3 className="edu_glow">EDUCATION</h3>
          <img src='/images/education_logo.jpg' alt="Committee 3" />
          <p style={{color:"#0089FF"}}>Teaching the World</p>
        </div>
        <div className="committee">
          <h3  className="ai_glow" >ARTIFICIAL INTELLIGENCE</h3>
          <img src='/images/ai_logo.jpg' alt="Committee 2" />
          <p style={{color:"#47817F"}}>Building Artificial Intelligence</p>
        </div>
        
       
      </div>
    </div>
  );
};

export default Banner;