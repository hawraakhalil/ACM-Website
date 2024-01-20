import React from 'react';
import './AcmDesc.css';
import Animation2 from "./DragAnimation"

function ValuesSection() {
  return (
    <div className="goal-container">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2>Our Values</h2>
          <div>
            <p>
            Above all, our student branch is dedicated to fulfilling
            our mission of sharing our resources and knowledge. We 
            extend a helping hand to talented individuals in Lebanon
            and the region who share our values and are eager to 
            invest in their personal growth and develop computing 
            skills with our guidance and support.
            </p>
            <p style={{marginTop:"20px"}}>Check out our <a  href="../pdfs/bylaws.pdf" target="_blank" rel="noopener noreferrer" >Bylaws</a> to learn more about us!</p>
          </div>
        </div>
        <div className="about-us-right">
          <Animation2 />
        </div>
      </div>
    </div>
  );
};

export default ValuesSection
