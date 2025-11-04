"use client";

import Image from "next/image";
import img2 from "@/public/img2.webp";
import AboutAnimation from "./AboutAnimation";

function AboutMePart1() {
  return (
    <AboutAnimation>
      <div className="about-text flex min-h-[264px] flex-col justify-between rounded-md border-2 border-gray-800 p-4 sm:p-8 lg:flex-row">
        <div>
          <p className="max-w-full leading-[1.8]">
            Hi there 👋, I&apos;m <strong>Omar Yasser</strong>, an 18-year-old
            self-taught full-stack web developer from Egypt 🇪🇬. I&apos;ve been
            learning programming for several years through hands-on projects,
            documentation, and real problem solving.
          </p>
          <ul className="mt-4 ml-5 list-disc space-y-3">
            <li>
              <strong>JavaScript:</strong> learned from Elzero Web School on
              YouTube, the
              <em> Eloquent JavaScript</em> book, and by solving challenges on
              LeetCode.
            </li>
            <li>
              <strong>React.js &amp; Next.js:</strong> studied from Jonas
              Schmedtmann’s courses, official documentation, and applied them in
              practical projects.
            </li>
            <li>
              <strong>Node.js:</strong> learned from Jonas, MaharaTech, and the
              <em> Node.js Design Patterns</em> book — with a focus on clean
              architecture and scalable backend systems.
            </li>
            <li>
              <strong>MongoDB &amp; Mongoose:</strong> practiced through Jonas,
              MaharaTech, MongoDB documentation, and MongoDB University
              (Aggregation Framework).
            </li>
          </ul>
          <p className="mt-4 max-w-full leading-[1.8]">
            I&apos;m passionate about building efficient, modern web
            applications and continuously improving my skills to become a top
            freelance developer.
          </p>
        </div>
        <Image
          src={img2}
          className="hidden aspect-square w-[250px] object-cover object-[-25px] lg:block"
          alt="illustration image of someone studing on desk"
        />
      </div>
    </AboutAnimation>
  );
}

export default AboutMePart1;
