"use client";
import { Typewriter } from "react-simple-typewriter";

function TypingAnimation({ typingPhrases }) {
  return (
    <Typewriter
      words={typingPhrases}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
}

export default TypingAnimation;
