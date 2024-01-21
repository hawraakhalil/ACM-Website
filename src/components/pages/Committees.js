import "../../App.css";
import React from "react";
import Footer from "../Footer";
import Banner from "../Banner";
import CpDesc from "../CpDesc";
import EduDesc from "../EduDesc";
import AiDesc from "../AiDesc";
import "./AboutUs.css";

function Committees() {
  return (
    <>
      <Banner />
      <CpDesc />
      <EduDesc />
      <AiDesc />
      <div className="closing-banner">
        <p className="medium-font">
          🌐💻👾 Join us in shaping the future of technology, one committee at a time. Let's code, educate, and innovate together!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Committees;
