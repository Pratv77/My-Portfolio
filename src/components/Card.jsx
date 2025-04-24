// src/components/Card.js
import React from "react";
import { motion } from "framer-motion";

const Card = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x:-20 }}
      animate={{ opacity: 1, y: 0, x:0 }}
      transition={{ duration: 0.6, delay }}
      className="h-full w-full bg-gray-50/[.02] transition duration-300 rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default Card;