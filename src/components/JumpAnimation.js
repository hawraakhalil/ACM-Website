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
          y: isTapped ? [0, -150, -150, 0] : 0,
          rotate: isTapped ? [0, 0, 360, 360] : 0,
        }}
        transition={{ duration: 1.1 }}
      />
    </div>
  );
};

export default JumpAnimation;
