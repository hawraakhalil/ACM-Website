import React from 'react';
import './AcmDesc.css';
import Animation from "./Animation"

const AcmDescSection = () => {
    return (
      
      <div className="about-us-container">
        <div className="about-us-left">
          <h2>What is ACM?</h2>
          <div>
          <p>The ACM AUB Student Branch at the American University of Beirut (AUB) is a student-led organization dedicated to fostering a thriving computing community within AUB and Lebanon.</p>
        </div>
        <div>
          <p>
            ACM AUB is a non-political and non-religious entity that warmly welcomes all AUB students, regardless of their backgrounds. We strongly believe in academic excellence, education, and technological advancement, always emphasizing the responsible and ethical use of technology for positive societal impact. Furthermore, we are committed to promoting diversity, equity, and inclusion in the field of computing.
          </p>
        </div>
        </div>
        <div className="about-us-right">
          <Animation />
        </div>
        
      </div>
    );
  };
  
  export default AcmDescSection;