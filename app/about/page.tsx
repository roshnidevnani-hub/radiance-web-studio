import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Values } from "@/components/about/values";
import { AboutHero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";
import { Story } from "@/components/about/story";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Reduced top spacing for mobile */}
      <main className="overflow-x-hidden pt-16 lg:pt-20">
        {/* Global mobile width wrapper */}
        <div className="mx-auto w-full max-w-[100vw] px-4 sm:px-6 lg:px-0">
          <AboutHero />
          <Values />
          <Mission />
          <Story />
        </div>
      </main>

      <Footer />
    </>
  );
}