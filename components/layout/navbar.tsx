"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            Radiance
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button>Get a Quote</Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 transition hover:bg-slate-100 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 py-6 md:hidden">
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}

              <Button className="mt-2 w-full">
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}