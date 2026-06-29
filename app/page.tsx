import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/sections";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <main>
      <Section className="min-h-screen flex items-center">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h1">
              Premium websites that help businesses grow.
            </Heading>

            <Text className="mt-6">
              Radiance Web Studio designs and develops fast,
              modern, conversion-focused websites for ambitious
              brands.
            </Text>

            <div className="mt-10 flex gap-4">
              <Button>Get Started</Button>

              <Button variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}