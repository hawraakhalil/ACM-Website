import React from "react";
import "./AcmDesc.css";
import HoverAnimation from "./DragAnimation";

function GoalSection() {
  return (
    <div className="goal-container">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2>💡 Our Goals: Empowering Futures, Elevating Careers</h2>
          <div>
            <p>
              At ACM AUB, our primary goal is to empower our student members to
              soar to new heights in their fields and careers. How? By providing
              unwavering support from a network that includes our esteemed
              alumni, dedicated AUB faculty, and the renowned Association for
              Computing Machinery. Picture this: a community where every member
              we guide becomes a catalyst for change, an alumnus who pays it
              forward to support and inspire future generations.
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
