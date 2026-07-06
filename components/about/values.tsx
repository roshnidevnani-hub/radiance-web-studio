import {
  HeartHandshake,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

const values = [
  {
    icon: <HeartHandshake size={30} />,
    title: "Client First",
    description:
      "Every decision we make is focused on helping our clients succeed.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Innovation",
    description:
      "We use modern technologies and best practices to build future-ready websites.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Quality",
    description:
      "Every project is crafted with attention to detail, performance, and reliability.",
  },
];

export function Values() {
  return (
    <Section className="py-24 bg-slate-50">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Our Values
          </h2>

          <p className="mt-4 text-slate-600">
            The principles that guide every website we build.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="mb-5 text-blue-600">
                {value.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {value.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}