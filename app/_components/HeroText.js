"use client";

import { useState } from "react";
import ContactModalHandler from "./ContactModalHandler";
import HeroSocialMedia from "./HeroSocialMedia";
import TypingAnimation from "./TypingAnimation";
import HoverBtn from "./HoverBtn";

const typingPhrases = [
  "Passionate Front-End Developer",
  "Building Interactive Web Experiences",
  "Hands-On Back-End Development",
  "Transforming Ideas into Digital Solutions",
  "JavaScript, React, Node.js Enthusiast",
  "Crafting Beautiful, Functional Websites",
  "Clean, Scalable Code for the Modern Web",
  "Bringing Designs to Life with Code",
];

function HeroText() {
  const [showModal, setShowModal] = useState(false);
  const close = () => setShowModal(false);

  function handleClick(e) {
    e.stopPropagation();
    setShowModal((show) => !show);
  }

  return (
    <>
      <div className="mt-[60px] text-center lg:text-left">
        <h1 className="text-xl">Welcome, I&apos;m Omar Yasser</h1>

        <p className="mx-auto mt-4 mb-4 h-[80px] max-w-90 text-2xl font-bold sm:text-4xl lg:mx-0">
          <TypingAnimation
            typingPhrases={[
              "Front-End Developer",
              "Learning Node.js for Back-End",
              "Building Full-Stack Applications",
            ]}
          />
        </p>
        <div className="hidden h-0.5 w-[100px] bg-amber-300 lg:block"></div>
        <p className="mx-auto mt-4 h-[64px] max-w-90 text-xl font-bold sm:text-2xl lg:mx-0">
          <TypingAnimation typingPhrases={typingPhrases} />
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          {/* <a
            href="#about-me"
            className="bg-secondary btn-style relative mr-5 rounded-md px-8 py-3 font-semibold"
          >
            <span className="relative z-10">About Me</span>
          </a> */}

          <HoverBtn
            to={"#about-me"}
            className="bg-secondary border-secondary relative mr-5 rounded-md px-8 py-3 font-semibold"
            fillColor="bg-background"
          >
            About Me
          </HoverBtn>

          <HoverBtn onClick={handleClick} className="cursor-pointer">
            Contact Me
          </HoverBtn>
        </div>
        <HeroSocialMedia />
      </div>
      <ContactModalHandler showModal={showModal} close={close} />
    </>
  );
}

export default HeroText;
