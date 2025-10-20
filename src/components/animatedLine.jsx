import React from "react";
import { motion } from "framer-motion";

const AnimatedUnderline = ({
  width = "w-16",
  height = "h-1",
  color = "bg-purple-400",
  duration = 0.5,
}) => {
  return (
    <motion.div
      className={`${height} ${width} ${color} rounded-full mt-1`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration }}
      style={{ originX: 0 }}
    />
  );
};

export default AnimatedUnderline;
