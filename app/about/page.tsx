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

      <main className="pt-20">
        <AboutHero />
        <Values />
        <Mission />
        <Story />
      </main>

      <Footer />
    </>
  );
}