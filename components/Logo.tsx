"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  src?: string;
}

export default function Logo({
  className = "",
  variant = "dark",
  size = "md",
  src,
}: LogoProps) {
  const isLight = variant === "light";
  const defaultSrc = isLight ? "/footer-logo.png" : "/nav-logo.png";
  const finalSrc = src || defaultSrc;

  const heightClass =
    size === "xl"
      ? "h-20 sm:h-24 md:h-28"
      : size === "lg"
      ? "h-16 sm:h-20 md:h-24"
      : size === "sm"
      ? "h-9 sm:h-10 md:h-11"
      : "h-12 sm:h-14 md:h-16";

  return (
    <div className={`relative inline-flex items-center shrink-0 select-none ${className}`}>
      <Image
        src={finalSrc}
        alt="NOVEKTA — Architecture & Design Studio"
        width={380}
        height={130}
        priority
        className={`${heightClass} w-auto object-contain transition-transform duration-300 hover:scale-102`}
      />
    </div>
  );
}
