"use client";

import React from "react";
import Image from "next/image";
import { aboutData } from "@/app/data/contentExport";
import { DynamicIcon } from "./IconHelper";
import AnimateReveal from "./AnimateReveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-[#faf8f6] text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <AnimateReveal direction="right" duration={850} className="w-full flex justify-center">
              <div className="relative w-full max-w-[540px]">
                <Image
                  src={aboutData.mainImage}
                  alt={`${aboutData.headingPart1} ${aboutData.headingPart2} ${aboutData.headingHighlight}`}
                  width={495}
                  height={475}
                  priority
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                />
              </div>
            </AnimateReveal>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimateReveal direction="left" delay={120} duration={850}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-12 sm:w-16 h-[2px] bg-[#B08748]" />
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-neutral-900 uppercase">
                  {aboutData.eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-neutral-900 tracking-tight leading-[1.14] mb-6">
                {aboutData.headingPart1} <br />
                {aboutData.headingPart2} <br />
                <span className="text-[#B08748]">{aboutData.headingHighlight}</span>
              </h2>

              <p className="text-neutral-600 text-sm sm:text-[15px] lg:text-base leading-relaxed mb-10 max-w-xl">
                {aboutData.description}
              </p>

              <div className="grid grid-cols-3 max-w-lg">
                {aboutData.features.map((pillar, idx) => {
                  const isLast = idx === aboutData.features.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col items-center justify-center text-center px-3 sm:px-5 py-2 ${
                        !isLast ? "border-r border-neutral-300" : ""
                      }`}
                    >
                      <div className="text-[#B08748] mb-3 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <DynamicIcon name={pillar.icon} size={34} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800 tracking-wide text-center">
                        {pillar.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimateReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
