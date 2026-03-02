"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    slogan: "POWERING SOUTH AFRICAN HOMES & BUSINESSES SINCE 2001",
    subtext:
      "Over 25 years of trusted electrical expertise across South Africa",
    images: [
      "/images/hero/broadwalk-aerial.jpg",
      "/images/hero/broadwalk-house.jpg",
      "/images/hero/room-lounge-1.jpg",
    ],
  },
  {
    slogan: "TIRED OF PAYING FOR POWER YOU CAN\u2019T RELY ON?",
    subtext:
      "Our solar clients are saving massively on monthly electricity. We\u2019ll show you the numbers in a free assessment",
    images: [
      "/images/solar-install.jpg",
      "/images/hero/broadwalk-pool.jpg",
      "/images/hero/room-kitchen-1.jpg",
      "/images/hero/room-dining.jpg",
    ],
  },
  {
    slogan: "LEADING ELECTRICIANS IN RESIDENTIAL CONSTRUCTION",
    subtext: "Providing the spark your home deserves",
    images: [
      "/images/hero/broadwalk-garden.jpg",
      "/images/hero/broadwalk-lounge.jpg",
      "/images/hero/room-bedroom-1.jpg",
    ],
  },
  {
    slogan: "OUTRAGEOUS ELECTRICITY BILL?",
    subtext: "We\u2019ll lower that for you substantially",
    images: [
      "/images/hero/broadwalk-kitchen.jpg",
      "/images/hero/room-kitchen-2.jpg",
      "/images/hero/room-lounge-2.jpg",
    ],
  },
  {
    slogan: "CERTIFIED. INSURED. ONLY THE BEST",
    subtext:
      "Certified electrical contractors serving Gauteng and the Garden Route",
    images: [
      "/images/hero/room-bathroom.jpg",
      "/images/hero/room-bedroom-2.jpg",
      "/images/hero/room-kitchen-3.jpg",
    ],
  },
];

// Flatten all images for the background cycle
const allImages = slides.flatMap((s) => s.images);

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const imageTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Navigate to a specific text slide
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(
    () => goToSlide((currentSlide + 1) % slides.length),
    [currentSlide, goToSlide]
  );

  const prevSlide = useCallback(
    () => goToSlide((currentSlide - 1 + slides.length) % slides.length),
    [currentSlide, goToSlide]
  );

  // Auto-advance text slides every 6s
  useEffect(() => {
    slideTimerRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [nextSlide]);

  // Auto-cycle background images every 3s (faster than text)
  useEffect(() => {
    imageTimerRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => {
      if (imageTimerRef.current) clearInterval(imageTimerRef.current);
    };
  }, []);

  return (
    <section className="relative w-full aspect-[16/9] max-h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background images — cycle through ALL photos */}
      {allImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Elliot Electrical project"
            fill
            className="object-cover"
            priority={i < 3}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Text content — tied to slide index */}
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1
            key={`heading-${currentSlide}`}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wide mb-4 md:mb-6 animate-fadeSlideUp"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            {slides[currentSlide].slogan}
          </h1>
          <p
            key={`sub-${currentSlide}`}
            className="font-body text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fadeSlideUp"
            style={{
              animationDelay: "150ms",
              textShadow: "0 1px 8px rgba(0,0,0,0.3)",
            }}
          >
            {slides[currentSlide].subtext}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeSlideUp"
            style={{ animationDelay: "300ms" }}
          >
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
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/25 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/25 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots — represent text slides */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "bg-accent w-8"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
