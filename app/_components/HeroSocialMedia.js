import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import SplittingText from "./SplittingText";

function HeroSocialMedia() {
  return (
    <ul className="mt-5 flex flex-row justify-center gap-4 lg:flex-col lg:justify-start lg:gap-2">
      <li className="w-[calc(50px+8px+6ch+8px)]">
        <a
          href="https://github.com/Omar-Yasser-Frontend"
          rel="noreferral noopener"
          className="text-drop-parent relative flex max-w-[50px] min-w-[50px] cursor-pointer gap-2 overflow-hidden rounded-md border-2 border-gray-800 p-2 duration-400 hover:max-w-[calc(50px+8px+8ch+8px)]"
        >
          <IoLogoGithub size={30} /> <SplittingText text={"Github"} />
        </a>
      </li>
      <li className="w-[calc(50px+8px+6ch+8px)]">
        <a
          href="https://www.linkedin.com/in/omar-yasser-2440aa262/"
          rel="noreferral noopener"
          className="text-drop-parent relative flex max-w-[50px] min-w-[50px] cursor-pointer gap-2 overflow-hidden rounded-md border-2 border-gray-800 p-2 duration-500 hover:max-w-[calc(50px+8px+8ch+8px)]"
        >
          <IoLogoLinkedin size={30} /> <SplittingText text={"Linkedin"} />
        </a>
      </li>
    </ul>
  );
}

export default HeroSocialMedia;
