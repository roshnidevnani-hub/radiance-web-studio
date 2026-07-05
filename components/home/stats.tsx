import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

const stats = [
  {
    number: "100%",
    label: "Responsive Design",
  },
  {
    number: "90+",
    label: "Lighthouse Performance",
  },
  {
    number: "SEO",
    label: "Optimized",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

export function Stats() {
  return (
    <Section className="py-20 bg-slate-900">
      <Container>
        <div className="grid gap-10 text-center text-white md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-bold text-blue-400">
                {stat.number}
              </div>

              <p className="mt-3 text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}