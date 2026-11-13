"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { contactData } from "@/app/data/contentExport";
import AnimateReveal from "./AnimateReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    projectType: contactData.form.projectTypes[0] || "Residential Architecture",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        projectType: contactData.form.projectTypes[0] || "Residential Architecture",
        message: "",
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-6 bg-[#faf8f5] text-neutral-900 relative architectural-grid"
    >
      <div className="max-w-[1450px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimateReveal direction="right" duration={800}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C59D5F]" />
                <span className="text-xs font-bold tracking-[0.24em] text-[#C59D5F] uppercase">
                  {contactData.eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.18] mb-6">
                {contactData.headingPart1} <br />
                <span className="text-[#B08748]">{contactData.headingHighlight}</span>
              </h2>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal mb-10 max-w-md">
                {contactData.description}
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200/80 shadow-sm transition-all hover:border-[#C59D5F]/50">
                  <div className="w-12 h-12 rounded-lg bg-[#faf8f5] border border-[#C59D5F]/30 flex items-center justify-center text-[#B08748] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400 mb-1">
                      {contactData.office.title}
                    </h4>
                    <p className="text-sm font-semibold text-neutral-900 leading-snug">
                      {contactData.office.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200/80 shadow-sm transition-all hover:border-[#C59D5F]/50">
                  <div className="w-12 h-12 rounded-lg bg-[#faf8f5] border border-[#C59D5F]/30 flex items-center justify-center text-[#B08748] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400 mb-1">
                      {contactData.phone.title}
                    </h4>
                    <a
                      href={`tel:${contactData.phone.number.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-neutral-900 hover:text-[#B08748] transition-colors"
                    >
                      {contactData.phone.number}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200/80 shadow-sm transition-all hover:border-[#C59D5F]/50">
                  <div className="w-12 h-12 rounded-lg bg-[#faf8f5] border border-[#C59D5F]/30 flex items-center justify-center text-[#B08748] shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400 mb-1">
                      {contactData.email.title}
                    </h4>
                    <a
                      href={`mailto:${contactData.email.address}`}
                      className="text-sm font-semibold text-neutral-900 hover:text-[#B08748] transition-colors"
                    >
                      {contactData.email.address}
                    </a>
                  </div>
                </div>
              </div>
            </AnimateReveal>
          </div>

          <div className="lg:col-span-7">
            <AnimateReveal direction="left" delay={120} duration={800}>
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-neutral-200/90 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-[#C59D5F] border-l-[60px] border-l-transparent shadow-md" />
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">
                {contactData.form.title}
              </h3>
              <p className="text-neutral-500 text-sm mb-8">
                {contactData.form.subtitle}
              </p>

              {status === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#faf3e7] text-[#B08748] flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">
                    Message Sent Successfully
                  </h4>
                  <p className="text-neutral-600 text-sm max-w-sm mb-6">
                    Thank you for reaching out to Novekta Architectural Studio. Our lead
                    architect will review your project requirements and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-[#C59D5F] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#b08748] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#C59D5F] focus:ring-1 focus:ring-[#C59D5F] outline-none text-sm transition-all bg-[#faf8f5]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vance"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#C59D5F] focus:ring-1 focus:ring-[#C59D5F] outline-none text-sm transition-all bg-[#faf8f5]/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#C59D5F] focus:ring-1 focus:ring-[#C59D5F] outline-none text-sm transition-all bg-[#faf8f5]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#C59D5F] focus:ring-1 focus:ring-[#C59D5F] outline-none text-sm transition-all bg-[#faf8f5]/40 cursor-pointer"
                      >
                        {contactData.form.projectTypes.map((type, idx) => (
                          <option key={idx} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your project location, scope, and timeline..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#C59D5F] focus:ring-1 focus:ring-[#C59D5F] outline-none text-sm transition-all bg-[#faf8f5]/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded bg-[#C59D5F] hover:bg-[#b08748] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#C59D5F]/20 hover:shadow-[#C59D5F]/35 hover:-translate-y-0.5 cursor-pointer disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>{contactData.form.buttonText}</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            </AnimateReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
