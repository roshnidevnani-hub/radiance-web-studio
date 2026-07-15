import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Container } from "@/components/ui/container";

import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
{/* import { CTA } from "@/components/home/cta"; */}


export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}

        <section className="bg-slate-50 py-24">
          <Container>

            <div className="mx-auto max-w-4xl text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Our Services
              </span>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Websites that help your business grow.
              </h1>

              <p className="mt-6 text-xl leading-8 text-slate-600">
                We design and develop modern, high-performance websites that
                build trust, generate leads and create memorable digital
                experiences.
              </p>

            </div>

          </Container>
        </section>

        <Services />

        <Process />

        {/* <CTA /> */}

      </main>

      <Footer />
    </>
  );
}