"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bannerData } from "@/app/data/contentExport";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = bannerData.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const houseImg = slide.houseImage || slide.image;

  return (
    <section
      id="home"
      className="relative min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] xl:min-h-[960px] bg-[#0a0c0e] bg-gradient-to-r from-[#0a0c0e] via-[#0d1013] to-[#121519] text-white pt-32 sm:pt-36 lg:pt-44 xl:pt-48 pb-20 sm:pb-24 lg:pb-28 flex items-center overflow-hidden"
    >
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[62%] h-full pointer-events-none">
        <Image
          src={houseImg}
          alt={slide.titleLine2}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 64vw"
          className="object-cover object-center lg:object-left"
        />
      </div>

      <div className="absolute inset-y-0 left-0 w-full lg:w-[72%] bg-gradient-to-r from-[#0a0c0e] via-[#0a0c0e] via-40% sm:via-48% lg:via-52% to-transparent pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0e]/95 via-[#0a0c0e]/70 via-35% to-transparent to-65% pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-transparent via-25% to-transparent pointer-events-none z-1" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10">
        <div className="max-w-xl lg:max-w-xl xl:max-w-2xl py-8 sm:py-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-7 animate-fade-in-up">
            <span className="w-11 h-[3px] bg-[#B08748] inline-block shrink-0" />
            <span className="text-[12px] sm:text-[14px] font-semibold tracking-[0.24em] text-[#CBD5E1] uppercase">
              {slide.kicker || bannerData.eyebrow}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-black tracking-tight leading-[1.04] uppercase mb-6 sm:mb-7 animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            <span className="block text-white font-extrabold">
              {slide.titleLine1 || bannerData.headingPart1}
            </span>
            <span className="block text-[#C59D5F] font-black">
              {slide.titleLine2 || bannerData.headingPart2}
            </span>
          </h1>

          <p
            className="text-[#E2E8F0] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-light mb-10 sm:mb-12 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            {slide.description || bannerData.description}
          </p>

          <div
            className="mb-12 sm:mb-16 animate-fade-in-up"
            style={{ animationDelay: "450ms" }}
          >
            <a
              href={bannerData.button.href}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-[3px] bg-[#B08748] hover:bg-[#9a743a] text-white text-[15px] sm:text-[16px] font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>{bannerData.button.text}</span>
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>

          <div
            className="flex items-center gap-4 pt-2 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-white/25 hover:border-[#B08748] bg-black/40 backdrop-blur-xs flex items-center justify-center text-white/80 hover:text-white transition-all rounded-[2px]"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>

            <div className="flex items-center gap-2 px-1">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-[#B08748]"
                      : "w-5 sm:w-6 bg-white/35 hover:bg-white/60"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-white/25 hover:border-[#B08748] bg-black/40 backdrop-blur-xs flex items-center justify-center text-white/80 hover:text-white transition-all rounded-[2px]"
              aria-label="Next slide"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
