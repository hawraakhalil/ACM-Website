import "../../App.css";
import React, {useState, useRef } from "react";
import Footer from "../Footer";
import CpDesc from "../CpDesc";
import EduDesc from "../EduDesc";
import AiDesc from "../AiDesc";
import "./AboutUs.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import "../Banner.css";

function Committees() {
  const cp = useRef(null);
  const edu = useRef(null);
  const ai = useRef(null);

  const handleCommitteeClick = (committee) => {
    committee.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollToTopOnMount/>
      <div className="committees-container">
      <div className="top-section">
        <h2>Welcome to the Powerhouses of Progress: Our Committees!</h2>
        <p>
          At ACM AUB, our committees are the engines propelling us towards
          excellence. Currently, our student branch boasts three dynamic
          committees, each a force in its own right.
        </p>
      </div>
      <div className="bottom-section">
        <div className="committee"  onClick={() => handleCommitteeClick('cp')}>
          <h3 className="cp_glow">COMPETITIVE PROGRAMMING</h3>
          <img src="/images/cp_logo.jpg" alt="Committee 1" />
          <p style={{ color: "#B00707" }}>Igniting the Coding Spark</p>
        </div>
        <div className="committee" onClick={() => handleCommitteeClick('edu')}>
          <h3 className="edu_glow">EDUCATION</h3>
          <img src="/images/education_logo.jpg" alt="Committee 3" />
          <p style={{ color: "#0089FF" }}>Bridging Minds, Building Futures</p>
        </div>
        <div className="committee"  onClick={() => handleCommitteeClick('ai')}>
          <h3 className="ai_glow">ARTIFICIAL INTELLIGENCE</h3>
          <img src="/images/ai_logo.jpg" alt="Committee 2" />
          <p style={{ color: "#47817F" }}>
            Unleashing the Potential of Artificial Minds
          </p>
        </div>
      </div>
    </div>
      <CpDesc id="cp" ref={cp}/>
      <EduDesc  id="edu" ref={edu}/>
      <AiDesc id="ai" ref={ai}/>
      <Footer />
    </>
  );
}

export default Committees;
