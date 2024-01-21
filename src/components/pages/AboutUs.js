import React from "react";
import AcmDescSection from "../AcmDescSection";
import GoalSection from "../GoalSection";
import ValuesSection from "../ValuesSection";
import Footer from "../Footer";
import Vision from "../Vision";
import Message from "../Message";
import "./AboutUs.css"; 


function AboutUs() {
  return (
    <>
      <Message />
      <div className="welcome-banner">
        <p className="large-font">Welcome to ACM AUB – Where Innovation Meets Passion!</p>
        <p className="medium-font">Discover the Heartbeat of Computing Excellence in Lebanon</p>
      </div>
      <AcmDescSection />
      <Vision/>
      <GoalSection />
      <ValuesSection />
      <div className="closing-banner">
        <p className="medium-font">🌐💻✨ ACM AUB - Shaping Minds, Building Futures, Coding Lebanon’s Tomorrow!</p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
