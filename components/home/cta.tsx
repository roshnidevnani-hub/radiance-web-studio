import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";

export function CTA() {
  return (
    <Section className="py-24">
      <Container>
        <div className="rounded-[40px] bg-slate-900 px-10 py-20 text-center text-white">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Let's Build Something Amazing
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Ready to grow your business online?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Whether you're starting from scratch or redesigning an
            existing website, Radiance Web Studio can help you create
            a premium online presence.
          </p>

          <div className="mt-10">
            <Button>
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}