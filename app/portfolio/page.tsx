import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Container } from "@/components/ui/container";

import { Portfolio } from "@/components/home/portfolio";
{/*import { CTA } from "@/components/home/cta";*/}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}

        <section className="bg-slate-50 py-24">
          <Container>

            <div className="mx-auto max-w-4xl text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Our Portfolio
              </span>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Modern websites built with performance in mind.
              </h1>

              <p className="mt-6 text-xl leading-8 text-slate-600">
                Explore a collection of concept projects that demonstrate our
                approach to premium design, responsive development and SEO.
              </p>

            </div>

          </Container>
        </section>

        <Portfolio />

        {/* <CTA /> */}

      </main>

      <Footer />
    </>
  );
}