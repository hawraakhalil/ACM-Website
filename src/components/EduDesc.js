import React from 'react'
import { Link } from 'react-router-dom';
import "./CP_Desc.css"

function EduDesc() {
    return (
        <div className="committee-desc-container-edu">
          <div className="banner-section">
            <img src="/images/Education_banner.jpg" alt="Rectangular Banner" />
          </div>
          <div className="text-section-EDU">
            <h1>acm Education</h1>
            <p>The Education Committee serves to connect AUB students to their communities and provide them with opportunities to work on open-source projects to the benefit of society! Just as AUB ACM member students benefit from the expertise of alumni and senior students to improve their careers and skills, they have the same responsibility teach learners in their community. ACM EDU achieves that by administering free online courses supported by the AUB Faculty of Engineering to all learners and free programs for high school students about computer science and engineering. Check out our events{' '}
            <Link to="/Events" style={{ color: 'blue', textDecoration: 'underline' }}>here</Link>.
            </p>
          </div>
        </div>
      );
    };
export default EduDesc
