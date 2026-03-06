import { motion } from "motion/react";
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string; // e.g. "918263851791" (country code + number, no +)
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I have an inquiry about RiyaMeds Pharma products.",
}: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 cursor-pointer"
      style={{ textDecoration: "none" }}
    >
      {/* Tooltip label */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap pointer-events-none"
      >
        Chat with us on WhatsApp
      </motion.div>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{ background: "#25D366" }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: "#25D366" }}
        />
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.627 4.56 1.72 6.48L2.667 29.333l7.04-1.693A13.28 13.28 0 0 0 16.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 2.4c5.96 0 10.8 4.84 10.8 10.8 0 5.96-4.84 10.8-10.8 10.8-1.987 0-3.853-.547-5.467-1.493l-.387-.227-4.04.973.987-3.933-.253-.4A10.753 10.753 0 0 1 5.203 16c0-5.96 4.84-10.933 10.8-10.933zm-3.04 5.52c-.24 0-.627.093-.96.453-.333.36-1.267 1.24-1.267 3.013 0 1.787 1.293 3.507 1.48 3.747.186.24 2.52 4 6.213 5.453 3.067 1.2 3.693.96 4.36.893.667-.067 2.147-.88 2.453-1.733.307-.853.307-1.587.213-1.733-.093-.147-.333-.24-.707-.427-.373-.186-2.147-1.053-2.48-1.173-.333-.12-.573-.187-.813.187-.24.373-.933 1.173-1.147 1.413-.213.24-.427.267-.8.093-.373-.187-1.573-.587-2.987-1.853-1.107-.987-1.853-2.2-2.067-2.573-.213-.373-.027-.573.16-.76.16-.16.373-.427.56-.64.186-.213.24-.373.36-.613.12-.24.06-.453-.027-.64-.093-.187-.8-1.973-1.107-2.693-.28-.68-.573-.587-.813-.587l-.666-.013z" />
        </svg>
      </div>
    </motion.a>
  );
}
