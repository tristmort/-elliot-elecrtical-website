import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/data/company";
import { navItems } from "@/lib/data/navigation";
import { services } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/elliot-logo.png"
              alt="Elliot Electrical"
              width={160}
              height={53}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {company.tagline}. A household name in the greater Gauteng and the
              Garden Route since {company.established}.
            </p>
            <p className="text-white/50 text-xs">
              Qualified, Certified, Compliant & Registered
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  className="text-accent hover:text-accent/80 transition-colors text-sm font-semibold"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <Phone size={16} className="flex-shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    {company.phones.map((branch) => (
                      <a
                        key={branch.label}
                        href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 hover:text-accent transition-colors"
                      >
                        {branch.phone}
                        <span className="text-white/40">—</span>
                        <span className="text-white/50">{branch.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  {company.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  {company.address}
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                Areas Serviced
              </p>
              <p className="text-white/70 text-sm">
                {company.areas.join(" | ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Elliot Electrical. All rights
              reserved.
            </p>
            <p className="text-white/40 text-xs">
              Certified, Compliant & Registered Electrical Contractors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
