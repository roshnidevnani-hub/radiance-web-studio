"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300"
    >
      {/* Gradient Glow */}
      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-blue-200" />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        transition={{ duration: 0.25 }}
        className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-5 leading-8 text-slate-600">
        {description}
      </p>

      {/* Divider */}
      <div className="relative z-10 mt-8 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

      {/* Bottom Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500"
      />
    </motion.div>
  );
}