import React from 'react';
import './AcmDesc.css';
import HoverAnimation from "./HoverAnimation"

function ValuesSection() {
    return (

        <div className="goal-container">
          <div className="about-us-left">
            <h2>Our Values</h2>
            <div>
            <p>
            Above all, our student branch is dedicated to fulfilling our mission of sharing our resources and knowledge. We extend a helping hand to talented individuals in Lebanon and the region who share our values and are eager to invest in their personal growth and develop computing skills with our guidance and support.
</p>
          </div>
          </div>
          <div className="about-us-right">
            <HoverAnimation />
          </div>
        </div>
      );
    };
    

export default ValuesSection
