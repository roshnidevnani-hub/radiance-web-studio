import { Target, Eye } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

export function Mission() {
  return (
    <Section className="py-24 bg-slate-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-3xl bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Target size={30} />
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our mission is to help businesses grow through modern,
              high-performance websites that combine exceptional design,
              seamless user experience, and measurable business results.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Eye size={30} />
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              Our Vision
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We aim to become one of India's most trusted premium web
              studios by creating digital experiences that help businesses
              establish credibility and achieve long-term success online.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}