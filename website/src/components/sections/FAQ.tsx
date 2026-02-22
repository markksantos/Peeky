"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FAQItem from "@/components/ui/FAQItem";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Frequently asked questions
          </h2>
        </div>

        <div>
          {FAQS.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
