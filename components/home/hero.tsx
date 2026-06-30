import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/sections";
import { Text } from "@/components/ui/text";
import { BrowserMockup } from "./browser-mockup";

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Premium Web Design Agency
            </p>

            <Heading as="h1">
              We Build High-Performance Websites That Grow Your Business
            </Heading>

            <Text className="mt-6">
              Radiance Web Studio creates modern, fast and SEO-ready
              websites that help businesses build trust, generate
              leads and stand out online.
            </Text>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Get a Free Consultation
              </Button>

              <Button variant="outline">
                View Our Work
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-slate-700">

              <div>✓ Fast Delivery</div>

              <div>✓ Mobile Responsive</div>

              <div>✓ SEO Optimized</div>

              <div>✓ Ongoing Support</div>

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