import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Portfolio } from "@/components/home/portfolio";
import { CTA } from "@/components/home/cta";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Portfolio />
        <CTA />
      </main>

      <Footer />
    </>
  );
}