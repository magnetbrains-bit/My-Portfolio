import React from 'react';
import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      aria-hidden="true"
      className="w-full overflow-hidden -mb-2"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-16 lg:h-20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 40 Q 360 80 720 40 T 1440 40 V80 H0 V40Z"
          fill="url(#gradient)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
} 