import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MySvg from "./acm_logo.svg"
import './Animation.css';

const getRandomPosition = () => {
  const positions = [-100, -100, 100, 100];
  const randomIndex = Math.floor(Math.random() * positions.length);
  return positions[randomIndex];
};

const HoverAnimation = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleHover = () => {
    setPositionX(getRandomPosition());
    setPositionY(getRandomPosition());
  };

  return (
    <div className="container">
      <motion.img
        src={MySvg}
        alt="ACM Logo"
        whileHover={{
          x: positionX,
          y: positionY,
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={handleHover}
      />
    </div>
  );
};

export default HoverAnimation;