import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AcmDescSection from '../AcmDescSection';
import GoalSection from '../GoalSection';
import ValuesSection from '../ValuesSection';
import Footer from '../Footer';
import './AboutUs.css'; // Add your CSS file here

function AboutUs() {
  const [showMessage, setShowMessage] = useState(true);

  const handleHideMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="fun-message"
          >
            <p>Figure out what each logo does!</p>
            <button onClick={handleHideMessage}>Got it!</button>
          </motion.div>
        )}
      </AnimatePresence>
      <AcmDescSection />
      <GoalSection />
      <ValuesSection />
      <Footer />
    </>
  );
}

export default AboutUs;