import React from "react";
import AcmDescSection from "../AcmDescSection";
import GoalSection from "../GoalSection";
import ValuesSection from "../ValuesSection";
import Footer from "../Footer";
import Message from "../Message";

function AboutUs() {
  return (
    <>
      <Message />
      <AcmDescSection />
      <GoalSection />
      <ValuesSection />
      <Footer />
    </>
  );
}

export default AboutUs;
