"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Project from "./Project";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    imgPath: "/PomodoroTimer.webp",
    projectUrl: "https://pomodoro-timer-hpdq.vercel.app/",
    title: "Pomodoro Timer",
    description:
      "A fullstack Pomodoro timer app built as a personal challenge. Inspired by Pomofocus.io’s design, but fully rebuilt using React for the frontend and Express.js for the backend — including features like email confirmation and custom timer logic. Created for learning purposes only",
    tools: "Full-stack",
    importantTools: ["React.js", "Node.js", "Express.js", "Mongodb"],
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container mx-auto px-4 py-20">
        <h2 className="content-head">Portfolio</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              450: { slidesPerView: 1.3 },
              630: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
          >
            {projects.map(
              ({
                title,
                description,
                tools,
                importantTools,
                imgPath,
                projectUrl,
              }) => (
                <SwiperSlide key={description}>
                  <Project
                    title={title}
                    description={description}
                    tools={tools}
                    imgPath={imgPath}
                    projectUrl={projectUrl}
                    importantTools={importantTools}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <button
            aria-label="scroll to previous project"
            className={`swiper-prev bg-secondary/20 text-secondary hover:bg-secondary/30 absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all`}
          >
            <IoIosArrowBack />
          </button>
          <button
            aria-label="scroll to next project"
            className={`swiper-next bg-secondary/20 text-secondary hover:bg-secondary/30 absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
