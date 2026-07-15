"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/918788115615?text=Hi%20Radiance%20Web%20Studio%2C%0A%0AI%20visited%20your%20website%20and%20I'm%20interested%20in%20getting%20a%20website%20built%20for%20my%20business.%0A%0ACould%20we%20discuss%20my%20project%3F";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -2, 0],
      }}
      transition={{
        opacity: {
          duration: 0.7,
        },
        x: {
          duration: 0.7,
          ease: "easeOut",
        },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="fixed bottom-24 right-6 z-50 md:bottom-28 md:right-8"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Radiance Web Studio on WhatsApp"
        className="group relative block"
      >
        {/* Premium Pulse */}
        <motion.span
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />

        {/* Tooltip */}
        <div className="pointer-events-none absolute right-full top-1/2 mr-4 hidden -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-xl group-hover:block">
          <p className="font-semibold">
            Need help?
          </p>

          <p className="text-slate-300">
            Let's chat 👋
          </p>

          <div className="absolute right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-slate-900" />
        </div>

        {/* Main Button */}
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -6,
            rotate: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="relative flex items-center gap-4 rounded-full bg-[#25D366] px-6 py-4 text-white shadow-[0_20px_60px_rgba(37,211,102,0.45)] transition-all duration-300 group-hover:bg-[#20BA5A]"
        >
          <FaWhatsapp className="h-8 w-8 shrink-0" />

          <div className="hidden sm:block">
            <p className="text-xs font-medium uppercase tracking-widest text-green-100">
              Let's Talk
            </p>

            <p className="text-base font-bold">
              WhatsApp Us
            </p>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}