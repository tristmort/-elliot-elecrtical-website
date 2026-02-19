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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="right">
            <div>
              <p className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-3">
                Solar Expertise Since 2019
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-wide text-primary mb-6">
                Why Go Solar?
              </h2>
              <p className="text-muted-text text-base leading-relaxed mb-8">
                Tired of being left stranded without electricity because of the
                unpredictability of the power grid? Our solar solutions provide
                complete energy independence, backed by over two decades of
                electrical expertise.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-accent" />
                    </div>
                    <span className="text-dark-text text-sm font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-8">
                <p className="text-primary text-sm font-medium">
                  Many systems can pay themselves off over time, depending on
                  usage and system size.
                </p>
              </div>

              <Link href="/quote?service=solar-backup-power" className="btn-primary">
                Book a Solar Assessment
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/solar-panels.jpg"
                  alt="Solar panel installation by Elliot Electrical"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 hidden md:block">
                <p className="font-heading font-extrabold text-3xl text-primary">
                  25+
                </p>
                <p className="text-muted-text text-sm">Years Experience</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
