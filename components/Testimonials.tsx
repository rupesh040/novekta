"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonialData } from "@/app/data/contentExport";
import AnimateReveal from "./AnimateReveal";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = testimonialData.items;

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-[#faf8f5] text-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <AnimateReveal direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#C59D5F]" />
              <span className="text-xs font-bold tracking-[0.24em] text-[#C59D5F] uppercase">
                {testimonialData.eyebrow}
              </span>
              <span className="w-6 h-[2px] bg-[#C59D5F]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.2] mb-4">
              {testimonialData.headingPart1}{" "}
              <span className="text-[#B08748]">{testimonialData.headingHighlight}</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
              {testimonialData.description}
            </p>
          </div>
        </AnimateReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {items.map((item, idx) => {
            const isCenter = item.highlight;
            const isCurrentMobile = activeIndex === idx;

            return (
              <AnimateReveal
                key={idx}
                direction="up"
                delay={idx * 150}
                duration={800}
                className={`h-full ${isCurrentMobile ? "block" : "hidden md:block"}`}
              >
                <div
                  className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 h-full ${
                    isCenter
                      ? "bg-[#faf3e7]/80 border-2 border-[#C59D5F] shadow-2xl md:-translate-y-2"
                      : "bg-white border border-neutral-200/80 shadow-md hover:shadow-xl"
                  }`}
                >
                  <div>
                    <div className="text-[#B08748] mb-6">
                      <Quote size={36} className="fill-[#C59D5F]/20 rotate-180" />
                    </div>

                    <div className="flex items-center gap-1 mb-4 text-[#C59D5F]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#C59D5F]" />
                      ))}
                    </div>

                    <p className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed mb-8 font-normal italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-neutral-200/80">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C59D5F] shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-neutral-900 tracking-tight">
                        {item.name}
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateReveal>
            );
          })}
        </div>

        <AnimateReveal direction="up" delay={200} duration={800}>
          <div className="flex items-center justify-center gap-6 pt-4">
            <button
              onClick={prevCard}
              className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#C59D5F] bg-white flex items-center justify-center text-neutral-600 hover:text-[#B08748] shadow-sm transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-8 bg-[#C59D5F]"
                      : "w-3 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#C59D5F] bg-white flex items-center justify-center text-neutral-600 hover:text-[#B08748] shadow-sm transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimateReveal>
      </div>
    </section>
  );
}
