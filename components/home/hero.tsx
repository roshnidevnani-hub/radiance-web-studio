"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
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
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-lg transition"
    >
      <h3 className="text-3xl font-black text-blue-600">
        {number}
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
    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
      <CheckCircle2 className="h-4 w-4 text-green-500" />
      {text}
    </div>
  );
}

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-36">

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
        className="absolute bottom-0 left-0 h-87.5 w-87.5rounded-full bg-cyan-300/20 blur-[120px]"
      />

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <FadeIn>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">

                <Sparkles className="h-4 w-4" />

                Premium Web Design Agency

              </div>

            </FadeIn>

            <FadeIn delay={0.15}>

              <Heading
                as="h1"
                className="mt-8 text-5xl font-black leading-tight lg:text-7xl"
              >

                Beautiful Websites

                <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">

                  That Turn Visitors Into Customers

                </span>

              </Heading>

            </FadeIn>

            <FadeIn delay={0.3}>

              <Text className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

                We design lightning-fast, SEO-ready websites that help
                businesses build trust, generate quality leads and
                convert visitors into loyal customers.

              </Text>

            </FadeIn>

            <FadeIn delay={0.45}>

              <div className="mt-8 flex items-center gap-3">

                <div className="flex">

                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

                <p className="text-sm text-slate-600">

                  Trusted by startups & growing businesses

                </p>

              </div>

            </FadeIn>

            <FadeIn delay={0.6}>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button className="group">

                  Start Your Project

                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />

                </Button>

                <Button variant="outline">

                  View Portfolio

                </Button>

              </div>

            </FadeIn>
                        <FadeIn delay={0.75}>
              <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
                <Stat number="250+" label="Projects Delivered" />
                <Stat number="98%" label="Client Satisfaction" />
                <Stat number="1.5s" label="Avg. Load Time" />
                <Stat number="24/7" label="Support" />
              </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="mt-12 flex flex-wrap gap-3">
                <TrustItem text="SEO Optimized" />
                <TrustItem text="Mobile Responsive" />
                <TrustItem text="Fast Delivery" />
                <TrustItem text="Modern Design" />
                <TrustItem text="Secure & Reliable" />
                <TrustItem text="Ongoing Support" />
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
              className="relative"
            >
              <BrowserMockup />

              {/* Floating Badge 1 */}

              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -left-6 top-10 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl xl:block"
              >
                <p className="text-2xl font-black text-blue-600">
                  +187%
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  More Leads
                </p>
              </motion.div>

              {/* Floating Badge 2 */}

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
                <p className="text-2xl font-black text-emerald-600">
                  95+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Lighthouse Score
                </p>
              </motion.div>

              {/* Floating Badge 3 */}

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
                🚀 Fast • Modern • Premium
              </motion.div>
            </motion.div>
          </FadeIn>

        </div>

      </Container>

    </Section>
  );
}