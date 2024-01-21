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
      <Footer />
    </>
  );
}

export default Committees;
