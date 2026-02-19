import { ShieldCheck, Award, Users } from "lucide-react";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

const trustItems = [
  {
    icon: <ShieldCheck size={36} />,
    title: "Certified & Registered",
    description:
      "Qualified, trained, certified, compliant, and registered teams delivering professional results.",
  },
  {
    icon: <Award size={36} />,
    title: "COC Certificates",
    description:
      "We issue Certificates of Compliance on all installations and existing properties following inspection.",
  },
  {
    icon: <Users size={36} />,
    title: "Trusted Since 2001",
    description:
      "A household name in Gauteng and the Garden Route for over two decades of reliable electrical services.",
  },
];

export function TrustCompliance() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-wide text-primary mb-4">
              Why Choose Elliot Electrical
            </h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto">
              Every installation is completed to the highest safety standards and
              fully compliant with local regulations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, i) => (
            <ScrollReveal
              key={item.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 150}
            >
              <div className="text-center p-8 rounded-2xl bg-light-grey border border-gray-100">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
