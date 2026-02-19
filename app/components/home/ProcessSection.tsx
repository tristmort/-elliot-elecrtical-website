import { Phone, ClipboardCheck, Zap, FileCheck } from "lucide-react";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: <Phone size={28} />,
    title: "Contact Us",
    description: "Get in touch for a free consultation and assessment of your electrical needs.",
  },
  {
    number: "02",
    icon: <ClipboardCheck size={28} />,
    title: "Site Assessment",
    description: "Our experienced team evaluates your property and designs the optimal solution.",
  },
  {
    number: "03",
    icon: <Zap size={28} />,
    title: "Professional Installation",
    description: "Certified technicians complete the installation to the highest safety standards.",
  },
  {
    number: "04",
    icon: <FileCheck size={28} />,
    title: "Certification & Handover",
    description: "Full compliance documentation and ongoing support for complete peace of mind.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-light-grey">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="right">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-wide text-primary mb-4">
              How It Works
            </h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto">
              From initial contact to certified completion, our streamlined
              process ensures quality at every step.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.number}
              direction={i % 2 === 0 ? "right" : "left"}
              delay={i * 100}
            >
              <div className="relative text-center">
                <div className="font-heading font-extrabold text-6xl text-primary/5 absolute -top-4 left-1/2 -translate-x-1/2">
                  {step.number}
                </div>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5 relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-primary mb-2 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
