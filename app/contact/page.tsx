import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Container } from "@/components/ui/container";

import { ContactSection } from "@/components/contact/contact-section";
{/*import { CTA } from "@/components/home/cta";*/}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}

        <section className="bg-slate-50 py-24">
          <Container>

            <div className="mx-auto max-w-4xl text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Contact Us
              </span>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Let's build your next website.
              </h1>

              <p className="mt-6 text-xl leading-8 text-slate-600">
                Whether you're launching a new business, redesigning an existing
                website or starting an e-commerce store, we're here to help.
              </p>

            </div>

          </Container>
        </section>

        <ContactSection />

        {/* <CTA /> */}

      </main>

      <Footer />
    </>
  );
}