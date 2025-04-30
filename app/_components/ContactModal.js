"use client";

import Modal from "./Modal";
import ContactUsContent from "./ContactUsContent";
import { useOutsideClick } from "../_hooks/useOutsideClick";

function ContactModal({ close }) {
  const ref = useOutsideClick(close);
  return (
    <Modal>
      <div
        className="border-secondary/20 mx-auto max-h-[calc(100vh-32px)] max-w-[100vw-32px] overflow-auto rounded-2xl border bg-black/50 p-8 shadow-xl backdrop-blur-lg lg:max-w-4xl"
        ref={ref}
      >
        <ContactUsContent />
      </div>
    </Modal>
  );
}

export default ContactModal;
