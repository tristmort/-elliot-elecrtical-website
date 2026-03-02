import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Wrench,
  Building2,
  ShieldCheck,
  Sun,
  Leaf,
  RefreshCw,
  FileCheck,
  ArrowLeft,
  Check,
  MapPin,
  Phone,
} from "lucide-react";
import { services } from "@/lib/data/services";
import { company } from "@/lib/data/company";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={32} />,
  Building2: <Building2 size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  Sun: <Sun size={32} />,
  Leaf: <Leaf size={32} />,
  RefreshCw: <RefreshCw size={32} />,
  FileCheck: <FileCheck size={32} />,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Elliot Electrical`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const paragraphs = service.fullDescription.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
              {iconMap[service.icon]}
            </div>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-wide text-white">
              {service.title}
            </h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* CTA Top */}
      <section className="bg-accent/5 border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-text text-sm font-medium">
            Need help with {service.title.toLowerCase()}? Get a free quote
            today.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/quote?service=${service.slug}`}
              className="btn-primary text-xs px-6 py-2.5"
            >
              Get a Quote
            </Link>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:gap-3 gap-0.5">
                {company.phones.map((branch) => (
                  <a
                    key={branch.label}
                    href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                    className="text-primary font-heading font-bold text-sm hover:text-accent transition-colors whitespace-nowrap"
                  >
                    {branch.phone} <span className="text-muted-text font-normal text-xs">— {branch.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div>
                  {paragraphs.map((p, i) => {
                    if (p.startsWith("**")) {
                      const match = p.match(
                        /\*\*(.+?)\*\*\s*—?\s*([\s\S]*)/
                      );
                      if (match) {
                        return (
                          <div
                            key={i}
                            className="my-8 p-6 rounded-xl bg-light-grey border border-gray-100"
                          >
                            <h3 className="font-heading font-bold text-lg text-primary mb-2">
                              {match[1]}
                            </h3>
                            <p className="text-muted-text text-sm leading-relaxed">
                              {match[2]}
                            </p>
                          </div>
                        );
                      }
                    }
                    return (
                      <p
                        key={i}
                        className="text-dark-text text-base leading-relaxed mb-6"
                      >
                        {p}
                      </p>
                    );
                  })}
                </div>
              </ScrollReveal>

              {/* Bullet Points */}
              {service.bulletPoints && service.bulletPoints.length > 0 && (
                <ScrollReveal direction="left" delay={200}>
                  <div className="mt-10">
                    <h2 className="font-heading font-bold text-xl text-primary uppercase tracking-wide mb-6">
                      What&apos;s Included
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.bulletPoints.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 p-4 rounded-xl bg-light-grey"
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={14} className="text-accent" />
                          </div>
                          <span className="text-dark-text text-sm font-medium">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Areas */}
              {service.areas && service.areas.length > 0 && (
                <ScrollReveal direction="left" delay={300}>
                  <div className="mt-10">
                    <h2 className="font-heading font-bold text-xl text-primary uppercase tracking-wide mb-6">
                      Suitable For
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {service.areas.map((area) => (
                        <span
                          key={area}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium"
                        >
                          <MapPin size={14} />
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div className="lg:sticky lg:top-28 space-y-6">
                  {/* Quote Card */}
                  <div className="p-8 rounded-2xl gradient-primary text-white">
                    <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-3">
                      Get a Free Quote
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      Request a free, no-obligation quote for{" "}
                      {service.title.toLowerCase()} services.
                    </p>
                    <Link
                      href={`/quote?service=${service.slug}`}
                      className="block text-center w-full py-3.5 bg-accent hover:bg-accent/90 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300"
                    >
                      Request Quote
                    </Link>
                  </div>

                  {/* Contact Card */}
                  <div className="p-8 rounded-2xl bg-light-grey border border-gray-100">
                    <h3 className="font-heading font-bold text-base text-primary uppercase tracking-wide mb-4">
                      Contact Us Directly
                    </h3>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-3 text-sm">
                        <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <div className="space-y-1.5">
                          {company.phones.map((branch) => (
                            <a
                              key={branch.label}
                              href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                              className="flex items-center gap-2 text-dark-text hover:text-accent transition-colors whitespace-nowrap"
                            >
                              {branch.phone}
                              <span className="text-muted-text">— {branch.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 gradient-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal direction="fade">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-wide text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-base mb-8">
              Contact our certified team today for expert{" "}
              {service.title.toLowerCase()} services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/quote?service=${service.slug}`}
                className="btn-primary"
              >
                Request a Quote
              </Link>
              <div className="flex flex-col sm:flex-row gap-3">
                {company.phones.map((branch) => (
                  <a
                    key={branch.label}
                    href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white hover:text-primary"
                  >
                    <Phone size={16} />
                    {branch.phone} — {branch.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
