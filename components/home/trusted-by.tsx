import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";
import { Text } from "@/components/ui/text";

const brands = [
  "Restaurants",
  "Healthcare",
  "Real Estate",
  "Education",
  "Hospitality",
  "Professional Services",
];

export function TrustedBy() {
  return (
    <Section className="py-16">
      <Container>
        <div className="text-center">
          <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted by ambitious businesses
          </Text>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center font-medium text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}