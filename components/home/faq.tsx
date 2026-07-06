"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 2–4 weeks depending on the project scope and content.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimized for phones, tablets, and desktops.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernize your current website with improved design, performance, and user experience.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer maintenance, updates, security monitoring, and technical support after launch.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="py-24 bg-slate-50">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Everything you need to know."
            description="Answers to some of the most common questions about our web design services."
          />
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}