import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Animation.css';
import MySvg from './acm_logo.svg';

const Animation = () => {
  const [isTapped, setIsTapped] = useState(false);

  const handleClick = () => {
    setIsTapped(!isTapped);
  };

  return (
    <div className="container" onClick={handleClick}>
      <motion.img
        src={MySvg}
        animate={{
          y: isTapped ? [0, -100, -100, 0] : 0,
          rotate: isTapped ? [0, 0, 360, 360] : 0,
        }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default Animation;