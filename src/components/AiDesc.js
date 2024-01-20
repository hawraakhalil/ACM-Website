import React from "react";
import { Link } from "react-router-dom";
import "./CP_Desc.css";

const AiDesc = () => {
  return (
    <div className="committee-desc-container">
      <div className="text-section">
        <div className="text-section-AI">
          <h1>acm AI</h1>
          <p>
            The Artificial Intelligence Committee’s goal is to teach students
            about ML and empower them to be able to build AI and compete in AI
            Hackathons. It also leverages the experience of AI professionals and
            academics. Check out our events{" "}
            <Link
              to="/Events"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              here
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="banner-section">
        <img src="/images/AI_banner.jpg" alt="Rectangular Banner" />
      </div>
    </div>
  );
};

export default AiDesc;
