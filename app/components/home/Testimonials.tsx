"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-wide text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto">
              Trusted by homeowners, businesses, and estates across South Africa.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(0, 6).map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-light-grey border border-gray-100 text-center"
              >
                <Quote size={24} className="text-accent/40 mb-4 mx-auto" />
                <p className="text-dark-text text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-heading font-bold text-primary text-sm">
                    {t.name}
                  </p>
                  {t.location && (
                    <p className="text-muted-text text-xs">{t.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
