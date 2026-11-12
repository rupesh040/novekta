"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { headerData } from "@/app/data/contentExport";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = headerData.links.map((link) =>
        link.href.replace("#", "")
      );
      const scrollPos = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white animate-slide-down ${
        scrolled
          ? "py-2.5 sm:py-3 shadow-md border-b border-neutral-200/70"
          : "py-3 sm:py-4 border-b border-neutral-100 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center shrink-0">
            <Logo
              variant="dark"
              size="md"
              src={headerData.logo}
            />
          </a>

          <div className="hidden lg:block h-10 w-[1.5px] bg-[#B08748] opacity-70 ml-7 mr-8 shrink-0" />

          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {headerData.links.map((link, idx) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <div key={idx} className="relative flex flex-col items-center">
                  <a
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-[#B08748] font-semibold"
                        : "text-neutral-900 hover:text-[#B08748]"
                    }`}
                  >
                    {link.name}
                  </a>
                  {isActive && (
                    <span className="w-full h-[2px] bg-[#B08748] rounded-full mt-0.5" />
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="hidden lg:flex items-center">
          <a
            href={headerData.button.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[3px] bg-[#B08748] hover:bg-[#9a743a] text-white text-[14px] font-medium transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>{headerData.button.text}</span>
            <span className="text-base leading-none">&rarr;</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-800 hover:text-[#B08748] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {headerData.links.map((link, idx) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[15px] font-medium py-1.5 transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#B08748] font-bold"
                      : "text-neutral-800 hover:text-[#B08748]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B08748]" />
                  )}
                </a>
              );
            })}
            <div className="pt-4 border-t border-neutral-100">
              <a
                href={headerData.button.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] bg-[#B08748] text-white text-[14px] font-medium text-center"
              >
                <span>{headerData.button.text}</span>
                <span className="text-base leading-none">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
