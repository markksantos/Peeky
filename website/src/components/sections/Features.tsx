"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <SectionWrapper id="features">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Everything you need to preview
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
          Peeky handles the file formats macOS Quick Look doesn&apos;t — so you can
          stay in Finder and get things done.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            span={feature.span}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
