import React from "react";
import "./AcmDesc.css";
import HoverAnimation from "./HoverAnimation";

function GoalSection() {
  return (
    <div className="goal-container">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2>Our Goals</h2>
          <div>
            <p>
              Our primary goal is to empower our student members to reach new
              heights in their respective fields. We achieve this by providing
              unwavering support from our alumni, AUB faculty, and the
              Association for Computing Machinery itself. We envision a
              community where every member we assist becomes an alumnus who, in
              turn, gives back and supports future generations.
            </p>
          </div>
        </div>
        <div className="about-us-right">
          <HoverAnimation />
        </div>
      </div>
    </div>
  );
}

export default GoalSection;
