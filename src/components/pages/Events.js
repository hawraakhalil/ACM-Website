import "../../App.css";
import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import Footer from "../Footer";
import Timeline from "../Timeline";

function Events() {
  return (
    <>
          <ScrollToTopOnMount/>
      <Timeline />
      <Footer />
    </>
  );
}

export default Events;
