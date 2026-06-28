"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, BarChart3, Database } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Data Analyst", "Power BI Developer", "SQL Expert"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F9FA]"
    >
      <div className="absolute inset-0 bg-grid" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#1A73E8]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4285F4]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] rounded-full mb-6 text-sm text-[#1A73E8] font-medium"
          >
            <span className="w-2 h-2 bg-[#1A73E8] rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="text-text-primary">Hi, I'm </span>
          <span className="blue-gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <BarChart3 className="text-[#1A73E8] w-6 h-6" />
          <span className="text-2xl md:text-3xl font-semibold text-text-secondary">
            {titles[titleIndex]}
          </span>
          <Database className="text-[#1A73E8] w-6 h-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/resume.pdf" download className="google-button-primary flex items-center gap-2 group">
            <Download size={18} />
            Download Resume
          </a>
          <button
            className="google-button-outline flex items-center gap-2"
            onClick={() => scrollTo("#contact")}
          >
            <Mail size={18} />
            Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollTo("#about")}
        >
          <ChevronDown className="text-[#1A73E8] w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}
