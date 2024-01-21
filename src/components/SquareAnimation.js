import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Animation.css";
import MySvg from "./acm_logo.svg";

const SquareAnimation = () => {
  const [tapCount, setTapCount] = useState(0);

  const handleClick = () => {
    setTapCount((prevCount) => (prevCount + 1) % 5);
  };

  return (
    <div className="container" onClick={handleClick}>
      <motion.img
        src={MySvg}
        initial={{ x: 0, y: 0 }}
        animate={{
          y: tapCount === 1 ? -100 : tapCount === 3 ? 100 : 0,
          x:
            tapCount === 0
              ? -100
              : tapCount === 2
              ? 100
              : tapCount === 4
              ? 0
              : 0,
          rotate: tapCount % 2 === 1 ? 180 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.6,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SquareAnimation;
