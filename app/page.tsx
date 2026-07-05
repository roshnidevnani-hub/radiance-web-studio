import { Navbar } from "@/components/layout/navbar";
import { TrustedBy } from "@/components/home/trusted-by";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
<main>
  <Hero />
  <TrustedBy />
</main>
    
    </>
  );
}