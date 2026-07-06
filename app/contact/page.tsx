import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { ContactSection } from "@/components/contact/contact-section";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}