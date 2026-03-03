"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, Send, ShieldCheck } from "lucide-react";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";
import { Suspense } from "react";

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    service: preselectedService,
    propertyType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
      <section className="gradient-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-wide text-white mb-4">
            Request a Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get a free, no-obligation quote for your electrical or solar needs.
            Our certified team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-accent text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-sm font-heading font-medium">
            Prefer to call?
          </p>
          <div className="flex items-center gap-2">
            <Phone size={16} className="flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
              {company.phones.map((branch) => (
                <a
                  key={branch.label}
                  href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                  className="font-heading font-bold text-sm hover:text-white/80 transition-colors whitespace-nowrap"
                >
                  {branch.phone} <span className="text-white/60 font-normal text-xs">— {branch.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                {submitted ? (
                  <div className="text-center p-12 rounded-2xl bg-accent/5 border border-accent/20">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-accent" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-primary uppercase tracking-wide mb-3">
                      Quote Request Sent
                    </h2>
                    <p className="text-muted-text text-base mb-6">
                      Thank you for your request. Our team will prepare your
                      quote and get back to you within 24 hours.
                    </p>
                    <Link href="/" className="btn-primary">
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
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
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-dark-text"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
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
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-dark-text"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-dark-text"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="area"
                          className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
                        >
                          Area / Suburb
                        </label>
                        <input
                          id="area"
                          type="text"
                          value={formData.area}
                          onChange={(e) =>
                            setFormData({ ...formData, area: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-dark-text"
                          placeholder="Your area or suburb"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="service"
                          className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-dark-text bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="propertyType"
                          className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
                        >
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          value={formData.propertyType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              propertyType: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-dark-text bg-white"
                        >
                          <option value="">Select property type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="estate">Estate / Complex</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all text-dark-text resize-none"
                        placeholder="Describe your project or what you need help with..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:w-auto text-base px-12 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Submit Quote Request"}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="lg:sticky lg:top-28 space-y-6">
                  {/* Why Choose Us */}
                  <div className="p-8 rounded-2xl gradient-primary text-white">
                    <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-6">
                      Why Choose Us
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Free, no-obligation quotes",
                        "Certified & registered electricians",
                        "Over 25 years of experience",
                        "COC certificates issued",
                        "Serving Gauteng & Garden Route",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-white/80"
                        >
                          <ShieldCheck size={16} className="text-accent flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Direct */}
                  <div className="p-8 rounded-2xl bg-light-grey border border-gray-100">
                    <h3 className="font-heading font-bold text-base text-primary uppercase tracking-wide mb-4">
                      Contact Us Directly
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-sm">
                        <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <div className="space-y-1.5">
                          {company.phones.map((branch) => (
                            <a
                              key={branch.label}
                              href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                              className="flex items-center gap-2 text-dark-text hover:text-accent transition-colors whitespace-nowrap"
                            >
                              {branch.phone}
                              <span className="text-muted-text">— {branch.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                      <a
                        href={`mailto:${company.email}`}
                        className="flex items-center gap-3 text-dark-text hover:text-accent transition-colors text-sm"
                      >
                        <Mail size={16} className="text-accent" />
                        {company.email}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-primary font-heading">Loading...</div>
        </div>
      }
    >
      <QuoteFormInner />
    </Suspense>
  );
}
