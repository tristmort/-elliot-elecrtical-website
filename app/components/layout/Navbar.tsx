"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navItems, ctaNavItem } from "@/lib/data/navigation";
import { company } from "@/lib/data/company";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-lg py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/elliot-logo.png"
              alt="Elliot Electrical"
              width={320}
              height={100}
              className={`transition-all duration-300 ${
                isScrolled ? "h-12 sm:h-16 w-auto" : "h-20 sm:h-28 w-auto"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-glow py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link href={ctaNavItem.href} className="btn-primary">
              {ctaNavItem.label}
            </Link>
            <div className="flex items-start gap-2 text-primary font-heading font-bold text-xs">
              <Phone size={14} className="mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-0.5">
                {company.phones.map((branch) => (
                  <a
                    key={branch.label}
                    href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 hover:text-accent transition-colors whitespace-nowrap"
                  >
                    {branch.phone}
                    <span className="text-muted-text font-medium">— {branch.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={`tel:${company.phoneInternational.replace(/\s/g, "")}`}
              className="text-primary"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link-glow py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={ctaNavItem.href}
                className="btn-primary text-center"
                onClick={() => setIsMobileOpen(false)}
              >
                {ctaNavItem.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
