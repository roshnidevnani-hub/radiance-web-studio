import {
  Globe,
  ShoppingCart,
  MonitorSmartphone,
  RefreshCcw,
  Search,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/cards/service-card";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Business Websites",
    description:
      "Professional websites designed to build trust and generate enquiries for your business.",
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-commerce Stores",
    description:
      "Modern online stores that help you sell products securely and efficiently.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Landing Pages",
    description:
      "High-converting landing pages focused on marketing campaigns and lead generation.",
  },
  {
    icon: <RefreshCcw size={28} />,
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, responsive experiences that impress visitors.",
  },
  {
    icon: <Search size={28} />,
    title: "SEO & Performance",
    description:
      "Optimized websites that load quickly and are built to perform well in search engines.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security, backups, and technical support after launch.",
  },
];

export function Services() {
  return (
    <Section id="services" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Everything you need to build a powerful online presence."
          description="We help businesses create modern websites that build credibility, attract customers, and support long-term growth."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}