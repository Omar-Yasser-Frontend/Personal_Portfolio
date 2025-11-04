"use client";

import { motion } from "motion/react";

function AboutAnimation({ children, direction }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: direction === "left" ? "-30px" : "30px",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.5, once: true }}
      whileInView={{ opacity: 1, translateX: "0px" }}
    >
      {children}
    </motion.div>
  );
}

export default AboutAnimation;
