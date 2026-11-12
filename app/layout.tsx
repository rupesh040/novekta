import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOVEKTA | Architectural Studio — We Design Living Spaces",
  description:
    "Modern, sustainable architecture crafted for living. From concept to creation, Novekta designs spaces with purpose and precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-[#0c1014] text-neutral-900 selection:bg-[#c59d5f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
