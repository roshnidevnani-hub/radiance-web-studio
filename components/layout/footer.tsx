import Link from "next/link";

import { Container } from "@/components/ui/container";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Business Websites",
  "E-Commerce",
  "Landing Pages",
  "SEO",
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold">
              Radiance Web Studio
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Premium websites crafted to help ambitious businesses
              grow, build trust, and stand out online.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-600"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
          © 2026 Radiance Web Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}