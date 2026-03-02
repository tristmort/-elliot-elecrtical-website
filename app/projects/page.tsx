"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── image data grouped by project ─── */
const projects = [
  {
    title: "Boardwalk Estate, Plettenburg Bay",
    description: "A stunning residential build on the Garden Route featuring modern electrical installations throughout.",
    images: Array.from({ length: 6 }, (_, i) => `/images/projects/broadwalk/broadwalk-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    title: "Completed Projects",
    description: "",
    images: [
      "/images/projects/colourful-project/colourful-01.jpg",
      "/images/projects/colourful-project/colourful-02.jpg",
      "/images/projects/colourful-project/colourful-03.jpg",
      "/images/projects/colourful-project/colourful-05.jpg",
      "/images/projects/colourful-project/colourful-07.jpg",
      "/images/projects/colourful-project/colourful-08.jpg",
      ...[1,2,3,4,5,6,7,8,9,10,11,12,13,15,18,19,20,21,22].map(
        (n) => `/images/projects/finished-rooms/room-${String(n).padStart(2, "0")}.jpg`
      ),
    ],
  },
];

/* ─── scroll-reveal row wrapper ─── */
function ScrollRow({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-80px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── lightbox ─── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90" onClick={onClose}>
      {/* close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {/* prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft size={40} />
      </button>

      {/* image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={`Project photo ${index + 1}`}
        className="max-w-[90vw] max-h-[80vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight size={40} />
      </button>

      {/* counter */}
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-heading tracking-wide">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}

/* ─── main page ─── */
export default function ProjectsPage() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  /* build a flat list of ALL images for global lightbox navigation within a project */
  const openLightbox = (images: string[], index: number) => setLightbox({ images, index });

  const closeLightbox = () => setLightbox(null);

  const prevImage = () => {
    if (!lightbox) return;
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
    );
  };

  const nextImage = () => {
    if (!lightbox) return;
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
    );
  };

  return (
    <>
      {/* Hero banner */}
      <section className="gradient-primary text-white section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide mb-4 animate-fadeSlideUp">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-body">
            Browse through some of our recent finished projects.
          </p>
        </div>
      </section>

      {/* Project groups */}
      <section className="section-padding bg-light-grey">
        <div className="max-w-7xl mx-auto space-y-20">
          {projects.map((project, pi) => (
            <div key={project.title}>
              {/* Section heading */}
              <ScrollRow>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-wide">
                    {project.title}
                  </h2>
                  {project.description && <p className="text-muted-text mt-2">{project.description}</p>}
                </div>
              </ScrollRow>

              {/* Image grid — rows of 4 on desktop, 2 on tablet, 1 on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.images.map((src, i) => {
                  // stagger rows: every 4 images = new row with increasing delay
                  const rowIndex = Math.floor(i / 4);
                  return (
                    <ScrollRow key={src} delay={rowIndex * 120}>
                      <button
                        onClick={() => openLightbox(project.images, i)}
                        className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} — photo ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {/* hover overlay */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-white font-heading font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                          </span>
                        </div>
                      </button>
                    </ScrollRow>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
