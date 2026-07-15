import { Mail, Phone, Clock, MapPin } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <Section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Get In Touch
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Let's discuss your next project.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you need a business website, e-commerce store,
              landing page, or a complete redesign, we'd love to hear
              about your project.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-blue-600" size={22} />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>
                  <p className="text-slate-600">
                    radiancewebs@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-blue-600" size={22} />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Phone
                  </h3>
                  <p className="text-slate-600">
                    +91 8788115615
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-blue-600" size={22} />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Response Time
                  </h3>
                  <p className="text-slate-600">
                    Usually within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-blue-600" size={22} />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Location
                  </h3>
                  <p className="text-slate-600">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right */}

          <ContactForm />

        </div>
      </Container>
    </Section>
  );
}