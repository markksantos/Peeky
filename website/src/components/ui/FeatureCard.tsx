"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  TextT,
  BracketsCurly,
  Table,
  Code,
  FileZip,
  FolderOpen,
  Image as ImageIcon,
} from "@phosphor-icons/react";

const iconMap = {
  TextT,
  BracketsCurly,
  Table,
  Code,
  FileZip,
  FolderOpen,
  Image: ImageIcon,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  span?: number;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  icon,
  span = 1,
  index,
}: FeatureCardProps) {
  const Icon = iconMap[icon];
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className={`group rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 ${
        span === 2 ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3">
        {Icon && <Icon size={24} weight="duotone" className="text-accent" />}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}
