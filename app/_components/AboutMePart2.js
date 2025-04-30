import Image from "next/image";
import img2 from "@/public/img2.jpg";
import AboutAnimation from "./AboutAnimation";

function AboutMePart2() {
  return (
    <AboutAnimation direction={"left"}>
      <div className="about-text mt-8 min-h-[264px] flex-row-reverse items-start justify-end gap-8 rounded-md border-2 border-gray-800 p-4 sm:p-8">
        <Image
          src={img2}
          className="float-left mr-4 mb-4 aspect-square w-[200px] rounded-md"
          alt="illustration image of someone studing on desk"
        />
        <p className="max-w-full leading-[1.8]">
          I’ve been self-learning programming through courses, books, websites,
          and articles. My journey started around two years ago, driven by a
          passion for games and tech from a young age. At first, I explored
          Unity game development, but due to limited resources, the experience
          wasn’t ideal. Later, I joined the FWD scholarship program and
          discovered my interest in front-end development. I was initially
          confused between mobile and web development, but now I focus on
          building web apps. Currently, I’m a front-end developer with growing
          experience in back-end using Node.js. I love building web applications
          and I look forward to becoming a full-stack developer.
        </p>
      </div>
    </AboutAnimation>
  );
}

export default AboutMePart2;
