import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Message.css";

function Message() {
  const [showMessage, setShowMessage] = useState(true);

  const handleHideMessage = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="fun-message"
          >
            <p>Figure out what each logo does! 👀 </p>
            <button onClick={handleHideMessage}>Got it!</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Message;
