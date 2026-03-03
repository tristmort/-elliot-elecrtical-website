"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react";
import { areas } from "@/lib/data/areas";
import { company } from "@/lib/data/company";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";
import { notFound } from "next/navigation";

export default function AreaBookingPage({
  params,
}: {
  params: { region: string };
}) {
  const area = areas.find((a) => a.slug === params.region);
  if (!area) notFound();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, region: area.name }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try calling us directly.");
      }
    } catch {
      alert("Something went wrong. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80">
        <Image
          src={area.image}
          alt={area.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-4"
            >
              <ArrowLeft size={16} />
              Back to Areas
            </Link>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-wide text-white">
              Book a Service in {area.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <p className="text-muted-text text-base leading-relaxed">
                {area.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            {submitted ? (
              <div className="text-center p-12 rounded-2xl bg-accent/5 border border-accent/20">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-accent" />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary uppercase tracking-wide mb-3">
                  Thank You
                </h2>
                <p className="text-muted-text text-base mb-6">
                  Your booking request for {area.name} has been submitted.
                  We&apos;ll be in touch shortly.
                </p>
                <Link href="/" className="btn-primary">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div className="p-6 rounded-xl bg-light-grey border border-gray-100">
                  <label
                    htmlFor="name"
                    className="block font-heading font-bold text-sm text-primary uppercase tracking-wider mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all bg-white text-dark-text"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone Number */}
                <div className="p-6 rounded-xl bg-light-grey border border-gray-100">
                  <label
                    htmlFor="number"
                    className="block font-heading font-bold text-sm text-primary uppercase tracking-wider mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    id="number"
                    type="tel"
                    required
                    value={formData.number}
                    onChange={(e) =>
                      setFormData({ ...formData, number: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all bg-white text-dark-text"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Email */}
                <div className="p-6 rounded-xl bg-light-grey border border-gray-100">
                  <label
                    htmlFor="email"
                    className="block font-heading font-bold text-sm text-primary uppercase tracking-wider mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all bg-white text-dark-text"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div className="p-6 rounded-xl bg-light-grey border border-gray-100">
                  <label
                    htmlFor="message"
                    className="block font-heading font-bold text-sm text-primary uppercase tracking-wider mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all bg-white text-dark-text resize-none"
                    placeholder="Describe what you need help with..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-base disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Booking Request"}
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={300}>
            <div className="mt-12 p-8 rounded-2xl bg-light-grey border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-primary uppercase tracking-wide mb-6 text-center">
                Or Contact Us Directly
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    {company.phones.map((branch) => (
                      <a
                        key={branch.label}
                        href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-dark-text hover:text-accent transition-colors whitespace-nowrap"
                      >
                        <span className="font-heading font-bold text-sm">{branch.phone}</span>
                        <span className="text-muted-text text-xs">— {branch.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-dark-text hover:text-accent transition-colors"
                >
                  <Mail size={20} className="text-accent" />
                  <span className="font-heading font-bold text-sm">
                    {company.email}
                  </span>
                </a>
                <div className="flex items-center gap-3 text-dark-text">
                  <MapPin size={20} className="text-accent" />
                  <span className="text-sm">{company.address}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
