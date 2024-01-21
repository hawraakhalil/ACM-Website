import "../../App.css";
import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import Cards from "../Cards";
import Footer from "../Footer";

function Board() {
  return (
    <>
      <ScrollToTopOnMount/>
      <Cards />
      <Footer />
    </>
  );
}

export default Board;
