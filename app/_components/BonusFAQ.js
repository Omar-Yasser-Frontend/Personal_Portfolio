"use client";

import { useState } from "react";
import Modal from "./Modal";
import { useOutsideClick } from "../_hooks/useOutsideClick";
import { AnimatePresence, motion } from "motion/react";

function BonusFAQ() {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const ref = useOutsideClick(close);

  return (
    <>
      <button
        className="my-3 cursor-pointer underline"
        onClick={(e) => {
          e.stopPropagation();
          setShow((show) => !show);
        }}
      >
        What is bonus projects ?
      </button>
      <AnimatePresence>
        {show && (
          <Modal>
            <motion.div
              key="box"
              exit={{ scale: 0, rotate: "360deg" }}
              className="z-100 w-xl max-w-full text-sm sm:text-base"
            >
              <div
                ref={ref}
                className="relative m-4 rounded-md bg-white p-4 text-black"
              >
                <button
                  onClick={close}
                  className="ml-auto flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full border-2 border-black"
                  aria-label="Close modal"
                >
                  X
                </button>
                <h3 className="mb-4 text-3xl font-bold">Bonus Projects</h3>
                <div className="h-1 w-[100px] bg-[#000]"></div>
                <p className="mt-4">
                  Bonus Projects is some challenges from some websites like{" "}
                  <a
                    target="_blank"
                    href="https://www.frontendmentor.io/"
                    className="text-blue-800"
                  >
                    Front-end mentor
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    href="https://devchallenges.io/"
                    className="text-blue-800"
                  >
                    DevChallenges.io
                  </a>{" "}
                  and some other websites this challenges could conain some good
                  challenges could be not the best but could be valuable for
                  some
                </p>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default BonusFAQ;
