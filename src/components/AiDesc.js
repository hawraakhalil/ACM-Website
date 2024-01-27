import React from "react";
import { Link } from "react-router-dom";
import "./CP_Desc.css";

const AiDesc = () => {
  return (
    <div className="committee-desc-container">
      <div className="text-section">
        <div className="text-section-AI">
          <h1>acm ai</h1>
          <p>
            The Artificial Intelligence Committee at ACM AUB is on a mission to
            demystify the realms of Machine Learning (ML) and empower students
            to craft their AI solutions, ready to conquer AI Hackathons. We draw
            from the expertise of AI professionals and academics to guide our
            members through the intricate landscape of AI. Embark on a journey
            of innovation and exploration with us. Check out our events{" "}
            <Link
              to="/Events"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              here
            </Link>{" "}
            and dive into the world of artificial intelligence!
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
