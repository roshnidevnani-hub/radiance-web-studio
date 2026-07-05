import { Section } from "@/components/ui/sections";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { PortfolioCard } from "@/components/cards/portfolio-card";

const projects = [
  {
    title: "Luxury Restaurant",
    category: "Restaurant Website",
  },
  {
    title: "Modern Medical Clinic",
    category: "Healthcare",
  },
  {
    title: "Prime Real Estate",
    category: "Real Estate",
  },
];

export function Portfolio() {
  return (
    <Section id="portfolio" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Featured Work"
          title="Concept websites built with modern design principles."
          description="These showcase the quality, performance, and user experience we deliver for businesses."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}