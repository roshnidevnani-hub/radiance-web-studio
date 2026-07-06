"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/sections";
import { Text } from "@/components/ui/text";
import { BrowserMockup } from "./browser-mockup";
import { motion } from "framer-motion";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden">

      {/* 🌟 Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-40" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <FadeIn>
              <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Premium Web Design Agency
              </p>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.1}>
              <Heading as="h1">
                We Build High-Performance Websites That Grow Your Business
              </Heading>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.2}>
              <Text className="mt-6">
                Radiance Web Studio creates modern, fast and SEO-ready websites that
                help businesses build trust, generate leads and stand out online.
              </Text>
            </FadeIn>

            {/* Buttons */}
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button>Get a Free Consultation</Button>
                <Button variant="outline">View Our Work</Button>
              </div>
            </FadeIn>

            {/* Trust Points */}
            <FadeIn delay={0.4}>
              <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-slate-700">
                <div>✓ Fast Delivery</div>
                <div>✓ Mobile Responsive</div>
                <div>✓ SEO Optimized</div>
                <div>✓ Ongoing Support</div>
              </div>
            </FadeIn>

          </div>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.2}>
            <div>
              <BrowserMockup />
            </div>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}