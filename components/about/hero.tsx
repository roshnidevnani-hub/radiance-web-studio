import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { BrowserMockup } from "@/components/home/browser-mockup";

export function AboutHero() {
  return (
    <Section className="overflow-hidden pt-12 pb-14 lg:pt-24 lg:pb-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Mobile-first content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mx-auto mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 uppercase lg:mx-0">
              About Radiance Web Studio
            </p>

            <Heading
              as="h1"
              className="text-[2.2rem] leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-6xl"
            >
              We build websites that make businesses look trustworthy from the
              very first click.
            </Heading>

            <Text className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              Radiance Web Studio creates modern, responsive, and user-focused
              websites that help businesses present their brand professionally,
              improve user experience, and build a stronger online presence.
            </Text>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Modern Design",
                "Responsive Layout",
                "User-Focused Experience",
                "Built for Growth",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-700">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual first on mobile */}
          <div className="order-1 mx-auto w-full max-w-[320px] sm:max-w-sm lg:order-2 lg:max-w-none">
            <div className="rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <BrowserMockup />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}