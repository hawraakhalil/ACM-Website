import React from "react";
import { Link } from "react-router-dom";
import "./CP_Desc.css";

const CpDesc = () => {
  return (
    <div className="committee-desc-container">
      <div className="text-section">
        <h1>acm cp</h1>
        <p>
          Our Competitive Programming Committee is not just a platform; it's a
          launchpad for students aspiring to conquer programming competitions
          and thrive in the tech industry. We harness the wisdom of seasoned
          student competitors and accomplished, experienced alumni to impart
          knowledge, attract fresh talent, and elevate skills. Dive into a world
          of competitions, workshops, and endless possibilities. Explore our
          events{" "}
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
      </div>
    </div>
  );
};

export default CpDesc;
