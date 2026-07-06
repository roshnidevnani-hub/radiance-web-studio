import { Navbar } from "@/components/layout/navbar";
import { TrustedBy } from "@/components/home/trusted-by";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { WhyUs } from "@/components/home/why-us";
import { Process } from "@/components/home/process";
import { Portfolio } from "@/components/home/portfolio";
import { Stats } from "@/components/home/stats";
import { FAQ } from "@/components/home/faq";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar /> 
<main>

    <Hero />
    <WhyUs />
    <Process />
    <Portfolio /> 
    <Stats /> 
    <FAQ />
 <Services />
  <TrustedBy />
</main>
    <Footer />
    
    </>
  );
}