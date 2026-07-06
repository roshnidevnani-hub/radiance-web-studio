import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { CTA } from "@/components/home/cta";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Services />
        <Process />
        <CTA />
      </main>

      <Footer />
    </>
  );
}