"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, PresenceContext } from "motion/react";
import { GrMenu } from "react-icons/gr";
import ContactModal from "./ContactModal";
import ContactModalHandler from "./ContactModalHandler";

function Navigation() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const close = () => setShowModal(false);

  useEffect(function () {
    const closeDropdown = () => setShow(false);
    window.addEventListener("click", closeDropdown);

    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      <nav className="flex items-center">
        <GrMenu
          onClick={(e) => {
            e.stopPropagation();
            setShow((show) => !show);
          }}
          size={30}
          className="cursor-pointer sm:hidden"
        />
        <ul
          className={`sm:flex ${
            show ? "" : "hidden"
          } bg-background absolute top-full left-0 z-10 w-full sm:static sm:bg-transparent`}
        >
          <li>
            <a href="#home" className="bg-anim bg-clip-text p-4">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="bg-anim bg-clip-text p-4">
              About Us
            </a>
          </li>
          <li>
            <a href="#skills" className="bg-anim bg-clip-text p-4">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="bg-anim bg-clip-text p-4">
              Portfolio
            </a>
          </li>

          <li className="my-auto ml-4 hidden sm:block">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                className="bg-secondary btn-style relative cursor-pointer overflow-hidden rounded-md px-4 py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal((modal) => !modal);
                }}
              >
                <span href="#" className="relative z-50">
                  Contact Me
                </span>
              </button>
            </motion.div>
            <ContactModalHandler showModal={showModal} close={close} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
