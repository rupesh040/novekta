"use client";

import React from "react";
import Logo from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";
import { footerData, headerData } from "@/app/data/contentExport";
import AnimateReveal from "./AnimateReveal";

export default function Footer() {
  return (
    <footer className="relative bg-[#0c1014] text-neutral-300 pt-10 pb-10 border-t border-white/10 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[420px] h-[340px] opacity-[0.07] pointer-events-none select-none">
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#C59D5F]"
        >
          <path
            d="M50 350 L250 250 L450 350 L250 450 Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M50 200 L250 100 L450 200 L250 300 Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M50 80 L250 0 L450 80 L250 160 Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="50"
            y1="80"
            x2="50"
            y2="350"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="250"
            y1="0"
            x2="250"
            y2="450"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="450"
            y1="80"
            x2="450"
            y2="350"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="150"
            y1="40"
            x2="150"
            y2="300"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <line
            x1="350"
            y1="40"
            x2="350"
            y2="300"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <AnimateReveal direction="up" duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          <div className="lg:col-span-5 flex flex-col justify-start">
            <a href="#home" className="inline-block mb-6">
              <Logo
                variant="light"
                size="lg"
                src={footerData.logo}
              />
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
              {footerData.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6 relative inline-block">
              Quick Links
              <span className="block h-[2px] w-6 bg-[#C59D5F] mt-2" />
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-[#C59D5F] text-sm transition-colors duration-200 inline-block font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6 relative inline-block">
              Get In Touch
              <span className="block h-[2px] w-6 bg-[#C59D5F] mt-2" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-white/5 border border-[#C59D5F]/30 flex items-center justify-center text-[#C59D5F] shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span className="text-neutral-400 text-sm leading-snug">
                  {footerData.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-white/5 border border-[#C59D5F]/30 flex items-center justify-center text-[#C59D5F] shrink-0">
                  <Phone size={16} />
                </div>
                <a
                  href={`tel:${footerData.contact.phone.replace(/\s+/g, "")}`}
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-white/5 border border-[#C59D5F]/30 flex items-center justify-center text-[#C59D5F] shrink-0">
                  <Mail size={16} />
                </div>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>{footerData.bottomBar.copyright}</p>
          <div className="flex items-center gap-6">
           
          </div>
        </div>
        </AnimateReveal>
      </div>
    </footer>
  );
}
