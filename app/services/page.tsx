import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Building2,
  ShieldCheck,
  Sun,
  Leaf,
  RefreshCw,
  FileCheck,
} from "lucide-react";
import { services } from "@/lib/data/services";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services | Elliot Electrical",
  description:
    "Professional electrical services including maintenance, construction, solar installations, compliance certificates, energy conservation and maintenance contracts.",
};

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={40} className="text-white" />,
  Building2: <Building2 size={40} className="text-white" />,
  ShieldCheck: <ShieldCheck size={40} className="text-white" />,
  Sun: <Sun size={40} className="text-white" />,
  Leaf: <Leaf size={40} className="text-white" />,
  RefreshCw: <RefreshCw size={40} className="text-white" />,
  FileCheck: <FileCheck size={40} className="text-white" />,
};

const serviceImages: Record<string, string> = {
  "maintenance-repairs": "/images/solar-installations.jpg",
  "electrical-construction": "/images/clubhouse.webp",
  "certificate-of-compliance": "/images/solar-panels.jpg",
  "revamp-renovate": "/images/robberg.jpg",
  "solar-backup-power": "/images/solar-panels.jpg",
  "conserving-energy": "/images/solar-installations.jpg",
  "maintenance-contracts": "/images/clubhouse.webp",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-wide text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Professional electrical solutions for residential, commercial and
            industrial needs across Gauteng and the Garden Route.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.slug}
                direction="up"
                delay={i * 150}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <Image
                    src={serviceImages[service.slug] || "/images/solar-panels.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20 group-hover:from-primary group-hover:via-primary/70 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20 group-hover:bg-accent/20 transition-colors duration-300">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light-grey">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal direction="fade">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-wide text-primary mb-4">
              Need Expert Electrical Help?
            </h2>
            <p className="text-muted-text text-base mb-8">
              Get a free, no-obligation quote for any of our services. Our
              certified team is ready to assist.
            </p>
            <Link href="/quote" className="btn-primary">
              Request a Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
