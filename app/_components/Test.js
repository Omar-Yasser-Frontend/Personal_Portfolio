"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function Test() {
  const [show, setShow] = useState(true);
  return (
    <div className="container mx-auto mt-[200px]">
      <AnimatePresence>
        {show ? (
          <motion.div
            animate={{ rotate: "20deg", once: true }}
            // viewport={{ once: true }}
            whileInView={{ rotate: "180deg" }}
            className="w-fit bg-amber-200 p-4"
            key="box"
            exit={{ opacity: 0, scale: 0 }}
          >
            hello world
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        className="fixed top-[360px]"
        onClick={() => setShow((show) => !show)}
      >
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}

export default Test;
