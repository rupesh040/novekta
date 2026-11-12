"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/app/data/contentExport";
import { DynamicIcon } from "./IconHelper";
import AnimateReveal from "./AnimateReveal";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateReveal direction="up" duration={800}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14 sm:mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 sm:w-14 h-[2px] bg-[#B08748]" />
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-neutral-900 uppercase">
                  {servicesData.eyebrow}
                </span>
              </div>
              <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed max-w-xs">
                {servicesData.leftSubtitle}
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative h-28">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#E0D5C7]" />
              <div className="flex items-end gap-[7px] h-24 pl-8">
                <div className="w-[3px] h-5 bg-[#E8DDD3]" />
                <div className="w-[3px] h-8 bg-[#E8DDD3]" />
                <div className="w-[3px] h-11 bg-[#E8DDD3]" />
                <div className="w-[3px] h-14 bg-[#E8DDD3]" />
                <div className="w-[3px] h-17 bg-[#E8DDD3]" />
                <div className="w-[3px] h-20 bg-[#E8DDD3]" />
                <div className="w-[3px] h-23 bg-[#E8DDD3]" />
                <div className="w-[3px] h-26 bg-[#E8DDD3]" />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-extrabold text-neutral-900 tracking-tight leading-[1.18] mb-4">
                {servicesData.headingPart1} <br />
                {servicesData.headingPart2 && `${servicesData.headingPart2} `}
                <span className="text-[#B08748]">{servicesData.headingHighlight}</span>
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                {servicesData.description}
              </p>
            </div>
          </div>
        </AnimateReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.items.map((service, idx) => {
            return (
              <AnimateReveal
                key={idx}
                direction="up"
                delay={idx * 140}
                duration={800}
                className="h-full"
              >
                <div
                  className="group relative overflow-hidden bg-[#141618] shadow-md transition-all duration-500 hover:shadow-2xl h-full"
                >
                  <div className="relative aspect-[320/378] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.category} ${service.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                    <div className="absolute inset-x-0 bottom-0 bg-[#141618]/95 backdrop-blur-sm px-4 sm:px-5 py-3.5 flex items-center justify-between border-t border-white/5 z-10">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="text-[#B08748] shrink-0 pr-3 sm:pr-4 border-r border-[#B08748]/70 flex items-center justify-center">
                          <DynamicIcon name={service.icon} size={26} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm sm:text-[15px] font-bold text-white tracking-normal leading-snug">
                            {service.category}
                          </span>
                          <span className="text-sm sm:text-[15px] font-bold text-white tracking-normal leading-snug">
                            {service.title}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        aria-label={`${service.category} ${service.title}`}
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-[#B08748] group-hover:bg-[#97713a] text-white flex items-center justify-center shrink-0 ml-3 transition-colors duration-300 cursor-pointer"
                      >
                        <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
