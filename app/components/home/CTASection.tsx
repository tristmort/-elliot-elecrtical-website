import Link from "next/link";
import { Phone } from "lucide-react";
import { company } from "@/lib/data/company";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 gradient-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <ScrollReveal direction="fade">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white mb-6">
            Ready for Reliable Power?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your electrical or solar needs.
            Our certified team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/quote"
              className="btn-primary text-base px-8 sm:px-12 py-3.5 sm:py-4"
            >
              Get Your Free Quote
            </Link>
            <a
              href={`tel:${company.phoneInternational.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-12 py-3.5 sm:py-4 border-2 border-white text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>

          <div className="text-white/60">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              {company.phones.map((branch) => (
                <a
                  key={branch.label}
                  href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                  className="font-heading font-bold text-xl sm:text-2xl text-white hover:text-accent transition-colors flex items-center gap-2"
                >
                  {branch.phone}
                  <span className="text-white/40 font-normal text-base">— {branch.label}</span>
                </a>
              ))}
            </div>
            <p className="text-sm mt-3">
              <a
                href={`mailto:${company.email}`}
                className="hover:text-accent transition-colors"
              >
                {company.email}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
