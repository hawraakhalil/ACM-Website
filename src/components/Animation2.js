import React from 'react'
import { motion } from "framer-motion"
import "./Animation.css"
import MySvg from './acm_logo.svg';

function Animation2() {

    return (
        <div className="container">
            <motion.img 
            src={MySvg} 
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            /> 
        </div>
      )
    }

export default Animation2
