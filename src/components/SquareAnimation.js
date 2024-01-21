import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Animation.css";
import MySvg from "./acm_logo.svg";

const JumpAnimation = () => {
  const [isTapped, setIsTapped] = useState(false);

  const handleClick = () => {
    setIsTapped(!isTapped);
  };

  return (
    <div className="container" onClick={handleClick}>
    <motion.img
      src={MySvg}
      animate={{
        y: isTapped ? [0, -100] : 0,
        rotate: isTapped ? [0, 360] : 0,
      }}
      transition={{
        type: 'tween', // Use tween for smooth transitions
        duration: 0.6, // Total duration for both animations
        ease: 'easeInOut', // Easing function for smooth animation
      }}
    />
  </div>
);
};

export default JumpAnimation;
