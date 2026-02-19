import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";
import { areas } from "@/lib/data/areas";

export const metadata: Metadata = {
  title: "Areas Serviced | Elliot Electrical | Johannesburg & Garden Route",
  description:
    "Elliot Electrical serves the greater Gauteng area including Johannesburg, Bryanston, Sandton, and the Garden Route. Professional electrical and solar services since 2001.",
};

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-wide text-white mb-4">
            Areas We Service
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A household name in the greater Gauteng and the Garden Route since
            2001.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {areas.map((area, i) => (
              <ScrollReveal
                key={area.slug}
                direction={i === 0 ? "left" : "right"}
              >
                <Link
                  href={`/areas/${area.slug}`}
                  className="group relative block aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent group-hover:from-primary/90 transition-all duration-500" />

                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 md:p-10">
                    <h2 className="font-heading font-extrabold text-2xl md:text-4xl uppercase tracking-wide text-white mb-3 text-center">
                      {area.name}
                    </h2>
                    <span className="inline-flex items-center px-6 py-2.5 bg-accent text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Book a Service
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className="text-center mt-16">
              <p className="text-muted-text text-base max-w-2xl mx-auto mb-6">
                Elliot Electrical has been serving communities across Gauteng and
                the Garden Route for over two decades. Select your region above
                to book a service or request a quote.
              </p>
              <Link href="/quote" className="btn-primary">
                Request a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
