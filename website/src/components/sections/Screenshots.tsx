"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const screenshots = [
  { caption: "Markdown preview" },
  { caption: "JSON tree view" },
  { caption: "CSV table rendering" },
  { caption: "Source code highlighting" },
];

function MacWindow({
  caption,
  index,
}: {
  caption: string;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
      className="min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900"
    >
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <span className="text-sm text-gray-400">Screenshot placeholder</span>
      </div>
      <div className="border-t border-gray-100 px-4 py-3 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{caption}</p>
      </div>
    </motion.div>
  );
}

export default function Screenshots() {
  return (
    <SectionWrapper id="screenshots">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          See it in action
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
          Rich previews for the formats that matter most.
        </p>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
        {screenshots.map((s, i) => (
          <MacWindow key={s.caption} caption={s.caption} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
