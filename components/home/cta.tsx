import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

import { FadeIn } from "@/components/shared/fade-in";

export function CTA() {
  return (
    <Section className="py-24">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center text-white shadow-2xl md:px-16">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Work Together
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Ready to grow your business online?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Whether you're launching a new business or upgrading your
              existing website, we'll create a modern digital experience
              that helps you attract customers and build trust.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button>
                Get a Free Consultation
              </Button>

              <Button variant="outline">
                View Portfolio
              </Button>
            </div>

          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}