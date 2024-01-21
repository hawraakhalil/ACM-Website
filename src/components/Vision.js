import React from "react";
import "./AcmDesc.css";
import DragAnimation from "./DragAnimation";

function Vision() {
  return (
    <div className="goal-container">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2>🌐 Spreading the Coding Vibe Across Lebanon</h2>
          <div>
            <p>
            We are not just enthusiasts; we are advocates on a mission. 
            ACM AUB passionately champions the cause of spreading the coding 
            culture across Lebanon. Our vision extends beyond the borders of 
            our university as we strive to cultivate a national coding 
            community that echoes with the rhythm of progress.
            </p>
          </div>
        </div>
        <div className="about-us-right">
          <DragAnimation />
        </div>
      </div>
    </div>
  );
}

export default Vision;
