import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { BrowserMockup } from "@/components/home/browser-mockup";

export function AboutHero() {
  return (
    <Section className="pt-32 pb-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              About Radiance Web Studio
            </p>

            <Heading as="h1">
              Modern websites designed to help businesses build a strong online presence.
            </Heading>

            <Text className="mt-6">
              Radiance Web Studio is dedicated to creating modern,
              responsive, and user-focused websites. We believe every
              business deserves a professional online presence that
              reflects its brand and helps it connect with customers.
            </Text>

            <div className="mt-10 grid grid-cols-2 gap-6 text-slate-700">
              <div>✓ Modern Design</div>
              <div>✓ Responsive Layout</div>
              <div>✓ User-Focused Experience</div>
              <div>✓ Built for Growth</div>
            </div>
          </div>

          {/* Right */}
          <div>
            <BrowserMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
}