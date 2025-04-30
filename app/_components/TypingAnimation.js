"use client";
import { Typewriter } from "react-simple-typewriter";

function TypingAnimation({ typingPhrases }) {
  return (
    <Typewriter
      words={typingPhrases}
      loop={false}
      cursor
      cursorStyle="|"
      //   cursorBlinking={false}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      //   onLoopDone={handleDone}
      //   onType={handleType}
    />
  );
}

export default TypingAnimation;
