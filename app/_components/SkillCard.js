"use client";
import Image from "next/image";

import { motion } from "motion/react";

function SkillCard({ skill: { imgPath, title, level, description } }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: "20px" }}
      whileInView={{ opacity: 1, x: "0px" }}
      viewport={{ amount: 0.3, once: true }}
      className="bg-background relative p-6"
    >
      <Image
        src={imgPath}
        alt={title}
        width={70}
        loading="lazy"
        height={70}
        className="border-secondary relative left-1/2 -mt-[40px] -translate-x-1/2 rounded-lg bg-white object-cover object-center"
      />
      <p className="mt-3 text-center text-xl font-bold">{title}</p>
      <p
        className={`${
          level === "Advanced" ? "text-green-400" : "text-orange-400"
        } text-center text-[18px] font-semibold`}
      >
        {level}
      </p>
      <p className="text-center">{description}</p>
    </motion.li>
  );
}

export default SkillCard;
