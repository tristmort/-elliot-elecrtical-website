import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

const benefits = [
  "Reduce electricity bills significantly",
  "Protection against load shedding",
  "Increase your property value",
  "Long-term return on investment",
  "Minimal maintenance required",
  "Warranty-backed installations",
];

export function SolarAuthority() {
  return (
    <section className="section-padding bg-light-grey">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal direction="right">
          <p className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-3">
            Solar Expertise Since 2019
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-wide text-primary mb-6">
            Why Go Solar?
          </h2>
          <p className="text-muted-text text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Tired of being left stranded without electricity because of the
            unpredictability of the power grid? Our solar solutions provide
            complete energy independence, backed by over two decades of
            electrical expertise.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="relative max-w-3xl mx-auto mb-10">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/solar-panels.jpg"
                alt="Solar panel installation by Elliot Electrical"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-8 py-4 hidden md:block">
              <p className="font-heading font-extrabold text-3xl text-primary">
                25+
              </p>
              <p className="text-muted-text text-sm">Years Experience</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 mt-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-accent" />
                </div>
                <span className="text-dark-text text-sm font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-8 max-w-xl mx-auto">
            <p className="text-primary text-sm font-medium">
              Many systems can pay themselves off over time, depending on
              usage and system size.
            </p>
          </div>

          <Link href="/quote?service=solar-backup-power" className="btn-primary">
            Book a Solar Assessment
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
