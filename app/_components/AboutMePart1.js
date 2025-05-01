"use client";

import Image from "next/image";
import img1 from "@/public/img1.webp";
import AboutAnimation from "./AboutAnimation";

function AboutMePart1() {
  return (
    <AboutAnimation>
      <div className="about-text min-h-[264px] justify-between rounded-md border-2 border-gray-800 p-4 sm:p-8">
        <Image
          src={img1}
          className="float-right aspect-square w-[200px] rounded-md"
          alt="illustration image of someone studing on desk"
        />
        <p className="max-w-full leading-[1.8]">
          Hi there 👋, I&apos;m Omar Yasser, 18 years old from Egypt, living in
          Dakahlia, Mansoura. I&apos;m a student at the Faculty of Commerce,
          Mansoura University, and a self-taught programmer. I’ve been learning
          through various courses, books, websites, and articles.
        </p>
      </div>
    </AboutAnimation>
  );
}

export default AboutMePart1;
