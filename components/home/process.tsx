import {
  Search,
  ClipboardList,
  PencilRuler,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    icon: <Search size={28} />,
    title: "Discovery",
    description:
      "We understand your business, audience, and goals before writing a single line of code.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Planning",
    description:
      "We create a clear structure and strategy so every page has a purpose.",
  },
  {
    icon: <PencilRuler size={28} />,
    title: "Design",
    description:
      "Modern, clean, and user-focused designs that build trust with visitors.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Development",
    description:
      "Fast, responsive, and SEO-friendly websites built with modern technologies.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Launch",
    description:
      "After testing and optimization, we launch your website with confidence.",
  },
  {
    icon: <LifeBuoy size={28} />,
    title: "Support",
    description:
      "We continue helping you with updates, maintenance, and future improvements.",
  },
];

export function Process() {
  return (
    <Section id="process" className="py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Process"
            title="A simple process designed for successful projects."
            description="From the first conversation to launch and beyond, we keep everything clear, collaborative, and focused on your business goals."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {step.icon}
                </div>

                <span className="text-sm font-semibold text-blue-600">
                  Step {index + 1}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}