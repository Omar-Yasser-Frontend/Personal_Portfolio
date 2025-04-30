"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ContactModal from "./ContactModal";
import { motion, AnimatePresence } from "framer-motion";

function ContactModalHandler({ close, showModal }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <motion.div exit={{ opacity: 0 }}>
          <div className="m-4 overflow-auto">
            <ContactModal close={close} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default ContactModalHandler;
