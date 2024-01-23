import "../../App.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./AboutUs.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import "../Banner.css";
import "../CP_Desc.css";

function Committees() {
  const cp = useRef(null);
  const edu = useRef(null);
  const ai = useRef(null);

  const handleCommitteeClick = () => {
    edu.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollToTopOnMount />
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
          <div
            className="committee"
            onClick={() => cp.current.scrollIntoView({ behavior: "smooth" })}
          >
            <h3 className="cp_glow">COMPETITIVE PROGRAMMING</h3>
            <img src="/images/cp_logo.jpg" alt="Committee 1" />
            <p style={{ color: "#B00707" }}>Igniting the Coding Spark</p>
          </div>
          <div
            className="committee"
            onClick={() => edu.current.scrollIntoView({ behavior: "smooth" })}
          >
            <h3 className="edu_glow">EDUCATION</h3>
            <img src="/images/education_logo.jpg" alt="Committee 3" />
            <p style={{ color: "#0089FF" }}>Bridging Minds, Building Futures</p>
          </div>
          <div
            className="committee"
            onClick={() => ai.current.scrollIntoView({ behavior: "smooth" })}
          >
            <h3 className="ai_glow">ARTIFICIAL INTELLIGENCE</h3>
            <img src="/images/ai_logo.jpg" alt="Committee 2" />
            <p style={{ color: "#47817F" }} ref={cp}>
              Unleashing the Potential of Artificial Minds
            </p>
          </div>
        </div>
      </div>
      <div className="committee-desc-container">
        <div className="text-section">
          <h1>acm CP</h1>
          <p>
            Our Competitive Programming Committee is not just a platform; it's a
            launchpad for students aspiring to conquer programming competitions
            and thrive in the tech industry. We harness the wisdom of seasoned
            student competitors and accomplished, experienced alumni to impart
            knowledge, attract fresh talent, and elevate skills. Dive into a
            world of competitions, workshops, and endless possibilities. Explore
            our events{" "}
            <Link
              to="/Events"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              here
            </Link>{" "}
            and join the coding revolution!
          </p>
        </div>
        <div className="banner-section">
          <img src="/images/cp_banner.jpg" alt="Rectangular Banner" />
          <div ref={edu} />
        </div>
      </div>

      <div className="committee-desc-container-edu">
        <div className="banner-section">
          <img src="/images/Education_banner.jpg" alt="Rectangular Banner" />
        </div>
        <div className="text-section-EDU">
          <h1>acm Education</h1>
          <p>
            The Education Committee at ACM AUB is the bridge connecting AUB
            students to their communities, offering avenues to contribute to
            open-source projects for the greater good. Just as ACM AUB members
            benefit from the mentorship of alumni and seniors, they carry the
            torch of knowledge to illuminate the path for learners in their
            communities. ACM EDU orchestrates free online courses, supported by
            the AUB Faculty of Engineering, extending learning opportunities to
            all. Our commitment doesn't stop there; we provide free programs for
            high school students, introducing them to the wonders of computer
            science and engineering. Discover our events{" "}
            <Link
              to="/Events"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              here
            </Link>{" "}
            and be part of the educational evolution!
          </p>
          <div ref={ai} />
        </div>
      </div>
      <div className="committee-desc-container">
        <div className="text-section">
          <div className="text-section-AI">
            <h1>acm AI</h1>
            <p>
              The Artificial Intelligence Committee at ACM AUB is on a mission
              to demystify the realms of Machine Learning (ML) and empower
              students to craft their AI solutions, ready to conquer AI
              Hackathons. We draw from the expertise of AI professionals and
              academics to guide our members through the intricate landscape of
              AI. Embark on a journey of innovation and exploration with us.
              Check out our events{" "}
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
      <Footer />
    </>
  );
}

export default Committees;
