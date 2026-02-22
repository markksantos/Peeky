"use client";

import { Check } from "@phosphor-icons/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/constants";

const features = [
  "All 15+ file format previews",
  "Native macOS integration",
  "Lifetime updates included",
  "Priority support",
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Simple pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
          One-time purchase. No subscriptions.
        </p>
      </div>

      <div className="mx-auto max-w-md">
        <GlassCard className="text-center">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Peeky</p>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">$9</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">one-time</span>
          </div>

          <ul className="mt-8 space-y-3 text-left">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <Check size={18} weight="bold" className="text-accent" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href={LINKS.lemonSqueezy}>Get Peeky</Button>
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
