import Link from "next/link";
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

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={32} />,
  Building2: <Building2 size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  Sun: <Sun size={32} />,
  Leaf: <Leaf size={32} />,
  RefreshCw: <RefreshCw size={32} />,
  FileCheck: <FileCheck size={32} />,
};

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-wide text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto">
              Professional electrical solutions for residential, commercial and
              industrial needs across Gauteng and the Garden Route.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.slug}
              direction="up"
              delay={i * 150}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full p-8 rounded-2xl bg-light-grey hover:bg-white border border-transparent hover:border-primary/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="text-accent font-heading font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 inline-block transition-transform">
                  Learn More &rarr;
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={1050}>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
