import { Section } from "@/components/ui/sections";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { PortfolioCard } from "@/components/cards/portfolio-card";

const projects = [
  {
    title: "Luxury Restaurant",
    category: "Restaurant Website",
    description:
      "A premium restaurant website with online reservations, elegant menus, and a mobile-first experience.",
    technologies: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    title: "Modern Medical Clinic",
    category: "Healthcare",
    description:
      "Professional healthcare website focused on patient trust, appointment booking, and fast performance.",
    technologies: ["React", "Performance", "Responsive"],
  },
  {
    title: "Prime Real Estate",
    category: "Real Estate",
    description:
      "Modern property showcase designed to generate high-quality enquiries and build credibility.",
    technologies: ["Next.js", "Lead Generation", "CMS"],
  },
];

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Featured Work"
          title="Beautiful websites built for ambitious businesses."
          description="Every project focuses on speed, user experience, SEO, and conversions."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}