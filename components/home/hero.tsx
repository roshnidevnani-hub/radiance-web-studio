"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/sections";
import { Text } from "@/components/ui/text";
import { BrowserMockup } from "./browser-mockup";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function Stat({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
     className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-lg backdrop-blur-xl transition sm:p-6"
    >
      <h3 className="text-2xl font-black text-blue-600 sm:text-3xl">
        {icon}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}

function TrustItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 sm:px-4 sm:text-sm">
      <CheckCircle2 className="h-4 w-4 text-green-500" />
      {text}
    </div>
  );
}export function Hero() {
  return (
<Section className="relative overflow-hidden py-12 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-white" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_60%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size:48px_48px]" />

      <motion.div
        animate={{
          y: [-30, 30, -30],
          x: [-20, 20, -20],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute right-0 top-0 h-112.5 w-112.5 rounded-full bg-blue-300/20 blur-[140px]"
      />

      <motion.div
        animate={{
          y: [30, -30, 30],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute bottom-0 left-0 h-87.5 w-87.5 rounded-full bg-cyan-300/20 blur-[120px]"
      />

      <Container>
       <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          

                   <div className="order-1 w-full text-center lg:text-left">

            <FadeIn>
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 lg:mx-0">
                <Sparkles className="h-4 w-4" />
                Modern Web Design Studio
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Heading
                as="h1"
                className="mt-6 text-[2.15rem] font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl"         >
                Beautiful Websites

                <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  Built for Modern Businesses
                </span>
              </Heading>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Text className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-slate-600 sm:max-w-xl sm:text-lg sm:leading-8 lg:mx-0">
                We design modern, responsive websites focused on creating
                a professional online presence, delivering a great user
                experience, and helping businesses connect with their
                customers.
              </Text>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mx-auto mt-8 inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm lg:mx-0">
                <Sparkles className="mr-2 h-4 w-4 text-blue-600" />

                <p className="text-sm font-medium text-slate-700">
                  Thoughtfully designed with performance, usability and
                  modern design principles.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
  <Link href="/contact" className="w-full sm:w-auto">
    <Button className="group h-12 w-full rounded-2xl text-base font-semibold sm:w-auto sm:px-6">
      Start Your Project
      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
    </Button>
  </Link>

  <Link href="/portfolio" className="w-full sm:w-auto">
    <Button
      variant="outline"
      className="h-12 w-full rounded-2xl text-base font-semibold sm:w-auto sm:px-6"
    >
      View Portfolio
    </Button>
  </Link>
</div>
            </FadeIn>

            <FadeIn delay={0.75}>
              <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 sm:grid-cols-4">

                <Stat
                  icon="🎨"
                  label="Custom Design"
                />

                <Stat
                  icon="📱"
                  label="Mobile Responsive"
                />

                <Stat
                  icon="⚡"
                  label="Performance Focused"
                />

                <Stat
                  icon="💻"
                  label="Modern Technology"
                />

              </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">

                <TrustItem text="Custom Design" />
                <TrustItem text="Responsive Layout" />
                <TrustItem text="Performance Focused" />
                <TrustItem text="Modern Technology" />
                <TrustItem text="Secure Development" />
                <TrustItem text="SEO Best Practices" />

              </div>
            </FadeIn>

          </div>

          {/* RIGHT */}
                    <FadeIn delay={0.4}>
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
                         className="relative order-2 w-full lg:order-2"
            ><div className="mx-auto w-full max-w-[320px] sm:max-w-md lg:max-w-155">
  <BrowserMockup />
</div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -right-6 bottom-12 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl xl:block"
              >
                <p className="text-xl font-black text-emerald-600">
                  Next.js
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Powered Website
                </p>
              </motion.div>

              {/* Top Badge */}

              <motion.div
                animate={{
                  x: [-6, 6, -6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute right-24 -top-8 hidden rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-xl lg:block"
              >
                🚀 Modern • Responsive • Professional
              </motion.div>
            </motion.div>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}