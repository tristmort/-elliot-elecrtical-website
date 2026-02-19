"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/solar-panels.jpg",
    slogan: "RELIABLE ELECTRICAL & SOLAR SOLUTIONS",
    subtext: "Certified contractors serving Gauteng and the Garden Route since 2001",
  },
  {
    image: "/images/solar-installations.jpg",
    slogan: "FREEDOM FROM LOAD SHEDDING",
    subtext: "Premium solar installations for energy independence and long-term savings",
  },
  {
    image: "/images/clubhouse.webp",
    slogan: "CERTIFIED. COMPLIANT. REGISTERED.",
    subtext: "Every installation completed to the highest safety standards",
  },
  {
    image: "/images/robberg.jpg",
    slogan: "YOUR GO2 IN ELECTRICAL",
    subtext: "Over two decades of trusted electrical expertise across South Africa",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full aspect-[16/9] max-h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.slogan}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wide mb-4 md:mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            {slides[current].slogan}
          </h1>
          <p className="font-body text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {slides[current].subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary text-base px-10 py-4">
              Get a Free Quote
            </Link>
            <Link
              href="/services/solar-backup-power"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Solar Solutions
            </Link>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "Certified Electricians",
              "Compliance & Safety First",
              "Est. 2001",
            ].map((chip) => (
              <span
                key={chip}
                className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-heading font-medium tracking-wide border border-white/20"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/25 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/25 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-accent w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
