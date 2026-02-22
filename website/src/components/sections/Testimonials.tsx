"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <SectionWrapper>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Loved by developers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
          See what people are saying about Peeky.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <GlassCard key={t.author} delay={i * 0.1}>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.author}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
