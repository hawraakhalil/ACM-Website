import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1> THE ACM CLUB </h1>
      <p>The largest Computer Science community at AUB</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          whereTo="/AboutUs"
        >
          ABOUT US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
