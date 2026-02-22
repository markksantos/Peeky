"use client";

import { motion, useReducedMotion } from "framer-motion";
import { METRICS } from "@/lib/constants";

export default function SocialProof() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-y border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 py-12 sm:flex-row sm:gap-16">
        {METRICS.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
