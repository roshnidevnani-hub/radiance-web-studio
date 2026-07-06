import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export function Story() {
  return (
    <Section className="py-24 bg-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Heading as="h2">
            Our Story
          </Heading>

          <Text className="mt-8">
            Radiance Web Studio was founded with one goal—to help businesses
            succeed online through beautiful, high-performing websites.
            We believe every business deserves a professional digital presence
            that builds trust, attracts customers, and delivers measurable
            results.
          </Text>

          <Text className="mt-6">
            Instead of creating ordinary websites, we focus on user experience,
            performance, SEO, responsiveness, and modern design standards so
            every project becomes a valuable business asset.
          </Text>
        </div>
      </Container>
    </Section>
  );
}