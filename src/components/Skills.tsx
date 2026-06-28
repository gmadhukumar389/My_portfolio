"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useState } from "react";

const categories = [
  { key: "powerBI", label: "Power BI" },
  { key: "sql", label: "SQL" },
  { key: "other", label: "Other Skills" },
] as const;

type SkillCategory = keyof typeof skills;

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-text-primary font-medium">{name}</span>
        <span className="text-xs text-[#1A73E8] font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-[#E8EAED] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-[#1A73E8]"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>("powerBI");

  return (
    <section id="skills" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Technical <span className="text-[#1A73E8]">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-[#1A73E8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key as SkillCategory)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat.key
                  ? "bg-[#1A73E8] text-white shadow-md"
                  : "bg-[#F1F3F4] text-text-secondary hover:bg-[#E8EAED]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {skills[active].map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
