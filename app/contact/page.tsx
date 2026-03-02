"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, User, Send, Clock } from "lucide-react";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email/CRM backend
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-wide text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Get in touch with our team for expert electrical and solar services
            across Gauteng and the Garden Route.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-accent text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <Phone size={16} className="flex-shrink-0" />
            {company.phones.map((branch, i) => (
              <span key={branch.label} className="flex items-center gap-1">
                {i > 0 && <span className="text-white/30 mx-1">|</span>}
                <a
                  href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                  className="font-heading font-bold text-sm hover:text-white/80 transition-colors"
                >
                  {branch.phone}
                </a>
                <span className="text-white/60 text-xs">— {branch.label}</span>
              </span>
            ))}
          </div>
          <span className="hidden sm:block text-white/30">|</span>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 font-heading font-bold text-sm hover:text-white/80 transition-colors"
          >
            <Mail size={16} />
            {company.email}
          </a>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-wide text-primary mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-text text-base mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                {submitted ? (
                  <div className="text-center p-12 rounded-2xl bg-accent/5 border border-accent/20">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-primary uppercase tracking-wide mb-3">
                      Message Sent
                    </h3>
                    <p className="text-muted-text text-base mb-6">
                      Thank you for reaching out. Our team will respond
                      within 24 hours.
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
                          htmlFor="subject"
                          className="block font-heading font-semibold text-xs text-primary uppercase tracking-wider mb-2"
                        >
                          Need Help With
                        </label>
                        <select
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
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
                        placeholder="Describe what you need help with..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="lg:sticky lg:top-28 space-y-6">
                  {/* Contact Card */}
                  <div className="p-8 rounded-2xl gradient-primary text-white">
                    <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-6">
                      Contact Details
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4 text-white/80">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
                            Phone
                          </p>
                          <div className="space-y-1">
                            {company.phones.map((branch) => (
                              <a
                                key={branch.label}
                                href={`tel:${branch.phoneInternational.replace(/\s/g, "")}`}
                                className="flex items-center gap-2 hover:text-accent transition-colors"
                              >
                                <span className="font-heading font-bold text-sm">{branch.phone}</span>
                                <span className="text-white/40 text-xs">— {branch.label}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      <a
                        href={`mailto:${company.email}`}
                        className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-white/50 uppercase tracking-wider">
                            Email
                          </p>
                          <p className="font-heading font-bold text-sm">
                            {company.email}
                          </p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 text-white/80">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-white/50 uppercase tracking-wider">
                            Address
                          </p>
                          <p className="font-heading font-bold text-sm">
                            {company.address}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-white/80">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-white/50 uppercase tracking-wider">
                            Contact Person
                          </p>
                          <p className="font-heading font-bold text-sm">
                            {company.owner}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Areas Card */}
                  <div className="p-8 rounded-2xl bg-light-grey border border-gray-100">
                    <h3 className="font-heading font-bold text-base text-primary uppercase tracking-wide mb-4">
                      Areas We Service
                    </h3>
                    <div className="space-y-3">
                      {company.areas.map((area) => (
                        <div
                          key={area}
                          className="flex items-center gap-3 text-dark-text text-sm"
                        >
                          <MapPin size={14} className="text-accent" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hours Card */}
                  <div className="p-8 rounded-2xl bg-light-grey border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock size={18} className="text-accent" />
                      <h3 className="font-heading font-bold text-base text-primary uppercase tracking-wide">
                        Availability
                      </h3>
                    </div>
                    <p className="text-muted-text text-sm">
                      Emergency services available 24/7 for maintenance contract
                      clients. Standard business hours for general enquiries.
                    </p>
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
