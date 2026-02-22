"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/constants";

const HeroBackground = dynamic(
  () => import("@/components/three/HeroBackground"),
  { ssr: false }
);

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeIn = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : null;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={fadeIn?.initial ?? { opacity: 0, y: 20 }}
          animate={fadeIn?.animate ?? { opacity: 1, y: 0 }}
          transition={fadeIn?.transition ?? { duration: 0.6 }}
        >
          <Badge text="macOS Quick Look Extension" />
        </motion.div>

        <motion.h1
          initial={fadeIn?.initial ?? { opacity: 0, y: 20 }}
          animate={fadeIn?.animate ?? { opacity: 1, y: 0 }}
          transition={fadeIn?.transition ?? { duration: 0.6, delay: 0.1 }}
          className="mt-6 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl dark:text-white"
        >
          Preview{" "}
          <span className="font-serif italic text-accent">everything</span>
          <br />
          on your Mac.
        </motion.h1>

        <motion.p
          initial={fadeIn?.initial ?? { opacity: 0, y: 20 }}
          animate={fadeIn?.animate ?? { opacity: 1, y: 0 }}
          transition={fadeIn?.transition ?? { duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-gray-500 dark:text-gray-400"
        >
          Peeky enhances Quick Look to preview Markdown, JSON, CSV, source code,
          archives, and more — right from Finder.
        </motion.p>

        <motion.div
          initial={fadeIn?.initial ?? { opacity: 0, y: 20 }}
          animate={fadeIn?.animate ?? { opacity: 1, y: 0 }}
          transition={fadeIn?.transition ?? { duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={LINKS.download}>Download Peeky</Button>
          <Button href={LINKS.github} variant="secondary" external>
            View on GitHub
          </Button>
        </motion.div>

        <motion.div
          initial={fadeIn?.initial ?? { opacity: 0, y: 30 }}
          animate={fadeIn?.animate ?? { opacity: 1, y: 0 }}
          transition={fadeIn?.transition ?? { duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-gray-400">Peeky Preview</span>
            </div>
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-accent/5 to-accent/10 md:h-80">
              <span className="text-sm text-gray-400">
                Screenshot placeholder
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
