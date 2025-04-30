"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import Project from "./Project";
import BonusFAQ from "./BonusFAQ";

function BonusProjects() {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="content-head mb-10 text-center">Bonus Projects</h2>
        <div className="relative">
          <BonusFAQ />
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
              nextEl: ".swiper-next-bonus",
              prevEl: ".swiper-prev-bonus",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <Project
                  title={`Project ${i + 1}`}
                  description={`Description for project ${i + 1}`}
                  tools={"Front-end"}
                  importantTools={["React.js", "Next.js", "Node.js"]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            aria-label="scroll to previous project"
            className={`swiper-prev-bonus bg-secondary/20 text-secondary hover:bg-secondary/30 absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all`}
          >
            <IoIosArrowBack />
          </button>
          <button
            aria-label="scroll to next project"
            className={`swiper-next-bonus bg-secondary/20 text-secondary hover:bg-secondary/30 absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BonusProjects;
