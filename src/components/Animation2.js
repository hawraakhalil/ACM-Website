import React from 'react'
import { motion } from "framer-motion"
import "./Animation.css"
import MySvg from "./acm_logo.svg"

function Animation2() {

    return (
        <div className="container">
            <motion.img 
            src={MySvg} 
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            /> 
        </div>
      )
    }

export default Animation2
