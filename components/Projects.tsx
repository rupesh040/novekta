"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/app/data/contentExport";
import AnimateReveal from "./AnimateReveal";

export default function Projects() {
  const [activeTab, setActiveTab] = useState(projectsData.categories[0]?.id || "civic-atrium");

  const activeProject =
    projectsData.categories.find((p) => p.id === activeTab) ||
    projectsData.categories[0];

  return (
    <section id="projects" className="py-10 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateReveal direction="up" duration={800}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <span className="w-10 sm:w-14 h-[1.5px] bg-[#B08748]" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-neutral-900 uppercase">
                {projectsData.eyebrow}
              </span>
              <span className="w-10 sm:w-14 h-[1.5px] bg-[#B08748]" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-neutral-900 tracking-tight leading-[1.18] text-center">
              {projectsData.headingPart1} <br />
              {projectsData.headingPart2 && `${projectsData.headingPart2} `}
              <span className="text-[#B08748]">{projectsData.headingHighlight}</span>
            </h2>
          </div>
        </AnimateReveal>

        <AnimateReveal direction="up" delay={120} duration={800}>
          <div className="border-b border-neutral-200 mb-10 sm:mb-14 overflow-x-auto scrollbar-none">
            <div className="flex items-center justify-between min-w-[620px] sm:min-w-0">
              {projectsData.categories.map((project, idx) => {
                const isActive = activeTab === project.id;
                const isLast = idx === projectsData.categories.length - 1;
                return (
                  <React.Fragment key={project.id}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(project.id)}
                      className={`flex-1 text-center py-3.5 sm:py-4 text-sm sm:text-base transition-colors duration-200 relative cursor-pointer ${
                        isActive
                          ? "font-bold text-neutral-900"
                          : "font-medium text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      <span>{project.categoryName}</span>
                      {isActive && (
                        <span className="absolute bottom-0 inset-x-0 h-[3px] bg-[#B08748]" />
                      )}
                    </button>
                    {!isLast && <div className="w-[1px] h-5 bg-neutral-200 shrink-0" />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </AnimateReveal>

        {activeProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-7">
              <AnimateReveal direction="right" delay={200} duration={800} className="h-full">
                <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] h-full overflow-hidden bg-neutral-100 group">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
              </AnimateReveal>
            </div>

            <div className="lg:col-span-5">
              <AnimateReveal direction="left" delay={200} duration={800} className="h-full">
                <div className="relative bg-[#faf8f5] p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden shadow-sm h-full">
                  <div className="relative z-10">
                    <div className="flex gap-4 sm:gap-5 mb-6 sm:mb-8">
                      <div className="w-[3px] bg-[#B08748] shrink-0 self-stretch rounded-full" />
                      <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-neutral-900 tracking-tight leading-[1.2]">
                        {activeProject.title}
                      </h3>
                    </div>

                    <p className="text-neutral-600 text-sm sm:text-[15px] lg:text-base leading-relaxed font-normal">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="pt-8 sm:pt-10 flex items-center gap-3.5 relative z-10">
                    <div className="text-[#B08748] shrink-0">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      >
                        <rect x="5" y="5" width="14" height="14" />
                        <rect x="3" y="3" width="4" height="4" fill="currentColor" stroke="none" />
                        <rect x="17" y="3" width="4" height="4" fill="currentColor" stroke="none" />
                        <rect x="3" y="17" width="4" height="4" fill="currentColor" stroke="none" />
                        <rect x="17" y="17" width="4" height="4" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                      {activeProject.area}
                    </span>
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-tl from-[#efe7dc]/80 via-[#f4eee6]/40 to-transparent rounded-tl-[100px] pointer-events-none" />
                </div>
              </AnimateReveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
