import React from "react";
import OnlineCourse from "../OnlineCourse";
import Footer from "../Footer";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

function OpenSources() {
  return (
    <>
          <ScrollToTopOnMount/>
      <OnlineCourse />
      <Footer />
    </>
  );
}

export default OpenSources;
