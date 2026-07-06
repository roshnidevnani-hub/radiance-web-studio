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
              Building premium websites that help businesses grow.
            </Heading>

            <Text className="mt-6">
              At Radiance Web Studio, we create fast, modern and
              SEO-optimized websites that help businesses build trust,
              generate more enquiries and establish a powerful online
              presence.
            </Text>

            <div className="mt-10 grid grid-cols-2 gap-6 text-slate-700">
              <div>✓ Premium Design</div>
              <div>✓ Lightning Fast</div>
              <div>✓ SEO Optimized</div>
              <div>✓ Mobile Responsive</div>
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