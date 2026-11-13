"use client";

import React from "react";
import Image from "next/image";
import { whyChooseUsData } from "@/app/data/contentExport";
import { DynamicIcon } from "./IconHelper";
import AnimateReveal from "./AnimateReveal";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-10 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimateReveal direction="right" duration={800}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 sm:w-14 h-[2px] bg-[#B08748]" />
                  <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-neutral-900 uppercase">
                    {whyChooseUsData.eyebrow}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-5 sm:mb-6">
                  {whyChooseUsData.headingPart1} <br />
                  {whyChooseUsData.headingPart2 && `${whyChooseUsData.headingPart2} `}
                  <span className="text-[#B08748]">{whyChooseUsData.headingHighlight}</span>
                </h2>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal mb-8 sm:mb-10 max-w-md">
                  {whyChooseUsData.description}
                </p>
              </div>

              <div className="relative w-full aspect-[520/325] overflow-hidden group">
                <Image
                  src={whyChooseUsData.image}
                  alt={whyChooseUsData.headingPart1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />
              </div>
            </AnimateReveal>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 pt-2">
            {whyChooseUsData.features.map((item, idx) => {
              const isLeftCol = idx % 2 === 0;
              const isTopRow = idx < 2;

              return (
                <AnimateReveal
                  key={idx}
                  direction="up"
                  delay={idx * 120}
                  duration={750}
                  className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-start transition-colors duration-300 ${
                    isLeftCol ? "sm:border-r border-neutral-200" : ""
                  } ${isTopRow ? "border-b border-neutral-200" : ""}`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#FAF7F2] flex items-center justify-center text-[#B08748] mb-5 sm:mb-6 shrink-0 transition-transform duration-300 hover:scale-105">
                    <DynamicIcon name={item.icon} size={28} strokeWidth={1.6} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-sm sm:text-[14px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </AnimateReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
