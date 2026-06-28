"use client";

import { motion } from "framer-motion";
import { personalInfo, navLinks } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <button onClick={() => scrollTo("#home")} className="text-2xl font-bold text-[#1A73E8]">
              MG
            </button>
            <p className="text-sm text-text-tertiary mt-2">
              Data Analyst & Power BI Developer
            </p>
          </div>

          <div className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-text-tertiary hover:text-[#1A73E8] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-center md:text-right text-sm text-text-tertiary">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#home")}
        className="absolute -top-5 right-8 w-10 h-10 rounded-full bg-[#1A73E8] text-white flex items-center justify-center shadow-google-md hover:scale-110 transition-transform"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
