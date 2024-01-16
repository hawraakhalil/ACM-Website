import React from 'react'
import {motion} from "framer-motion"
import "./Animation.css"
import MySvg from "./acm_logo.svg"

const Animation = () => {


  return (
    <div className="container">
        <motion.img 
        src={MySvg} 
        animate={{
            y: [50, -100, -100, 50],
            rotate: [0, 0, 360, 360],
            transition: {repeat:Infinity, duration: 2},
          }}
        transition={{repeat:Infinity}}
        /> 
    </div>
  )
}

export default Animation
