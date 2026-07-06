import Link from "next/link";

import { Container } from "@/components/ui/container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Business Websites",
  "E-commerce",
  "Landing Pages",
  "SEO",
  "Website Maintenance",
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-16 text-slate-300">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Radiance
            </h3>

            <p className="mt-4 leading-7">
              Premium websites that help ambitious businesses grow,
              build trust, and stand out online.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Services
            </h4>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Radiance Web Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}