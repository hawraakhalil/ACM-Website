import React from "react";
import "./AcmDesc.css";
import Animation from "./JumpAnimation";

const AcmDescSection = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2> 🚀 About ACM AUB: Igniting Minds, Fostering Futures </h2>
          <div>
            <p>
              Welcome to the vibrant hub of innovation and collaboration – the
              ACM AUB Student Branch at the prestigious American University of
              Beirut (AUB). We are not just an organization; we are the driving
              force behind a dynamic computing community within AUB and across
              the landscapes of Lebanon.
            </p>
          </div>
          <div>
            <p>
              Here at ACM AUB, we embrace diversity and open our arms to every
              AUB student, regardless of their backgrounds. Student-lead and 
              ever-dedicated, we stand as a beacon of academic excellence, 
              education, and technological advancement. Our compass always points 
              towards the responsible and ethical use of technology for a positive
              societal impact.
            </p>
          </div>
        </div>
        <div className="about-us-right">
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default AcmDescSection;
