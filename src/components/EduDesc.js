import React from "react";
import { Link } from "react-router-dom";
import "./CP_Desc.css";

function EduDesc() {
  return (
    <div className="committee-desc-container-edu">
      <div className="banner-section">
        <img src="/images/Education_banner.jpg" alt="Rectangular Banner" />
      </div>
      <div className="text-section-EDU">
        <h1>acm education</h1>
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
      </div>
    </div>
  );
}
export default EduDesc;
