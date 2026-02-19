"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "fade";
  delay?: number;
  threshold?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!isVisible) return;
    if (delay === 0) {
      setShouldAnimate(true);
      return;
    }
    const timer = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  const animationClass = {
    left: "animate-slide-in-left",
    right: "animate-slide-in-right",
    up: "animate-fade-up",
    fade: "animate-fade-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${shouldAnimate ? animationClass : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
