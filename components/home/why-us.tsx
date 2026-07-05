import {
  Zap,
  Smartphone,
  Search,
  Palette,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";

const features = [
  {
    icon: <Zap size={28} />,
    title: "Lightning Fast",
    description:
      "Fast-loading websites optimized for performance and Core Web Vitals.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile First",
    description:
      "Every website is designed to look and perform beautifully on every device.",
  },
  {
    icon: <Search size={28} />,
    title: "SEO Optimized",
    description:
      "Built with technical SEO best practices to improve online visibility.",
  },
  {
    icon: <Palette size={28} />,
    title: "Premium Design",
    description:
      "Modern, clean interfaces that build trust and reflect your brand.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Development",
    description:
      "Reliable, secure coding practices to protect your website and visitors.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Ongoing Support",
    description:
      "We're here after launch with updates, maintenance, and technical support.",
  },
];

export function WhyUs() {
  return (
    <Section id="why-us" className="py-24 bg-slate-50">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Why Choose Radiance"
            title="Built to help your business grow with confidence."
            description="We combine thoughtful design, modern development, and long-term support to deliver websites that create lasting business value."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 text-blue-600">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}