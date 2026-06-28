"use client";

import { motion, AnimatePresence } from "framer-motion";
import { courseData } from "@/lib/data";
import { useState } from "react";
import { ChevronDown, BookOpen, Database, BarChart3 } from "lucide-react";

function ModuleCard({
  module,
  index,
  isOpen,
  onToggle,
  icon: Icon,
}: {
  module: { id: number; title: string; description: string; topics: string[] };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  icon: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className={`glass-card rounded-xl overflow-hidden transition-all ${
        isOpen ? "border-[#D4AF37]/40" : "border-[#D4AF37]/5"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-5 flex items-center gap-4 text-left group"
      >
        <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
          <Icon className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#D4AF37] font-semibold">
              Module {String(module.id).padStart(2, "0")}
            </span>
          </div>
          <h4 className="text-sm md:text-base font-semibold text-white mt-0.5">
            {module.title}
          </h4>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#D4AF37] flex-shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-5">
              <p className="text-xs md:text-sm text-gray-400 mb-4 leading-relaxed">
                {module.description}
              </p>
              <ul className="space-y-1.5">
                {module.topics.map((topic, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-xs md:text-sm text-gray-400"
                  >
                    <span className="text-[#D4AF37] mt-1.5 w-1 h-1 rounded-full bg-[#D4AF37] flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState<"powerBI" | "sql">("powerBI");
  const [openModules, setOpenModules] = useState<number[]>([]);

  const currentCourse = courseData[activeTab];
  const moduleCount = currentCourse.length;

  const toggleModule = (id: number) => {
    setOpenModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <section id="course" className="relative py-24 bg-dark-100">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Power BI & SQL <span className="gold-text-gradient">Course</span>
          </h2>
          <p className="section-subheading mt-4">
            Comprehensive industry-level curriculum designed for aspiring data professionals
          </p>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => { setActiveTab("powerBI"); setOpenModules([]); }}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "powerBI"
                ? "bg-[#D4AF37] text-dark shadow-lg shadow-[#D4AF37]/25"
                : "glass-card text-gray-400 hover:text-[#D4AF37]"
            }`}
          >
            <BarChart3 size={16} />
            Power BI ({courseData.powerBI.length} Modules)
          </button>
          <button
            onClick={() => { setActiveTab("sql"); setOpenModules([]); }}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "sql"
                ? "bg-[#D4AF37] text-dark shadow-lg shadow-[#D4AF37]/25"
                : "glass-card text-gray-400 hover:text-[#D4AF37]"
            }`}
          >
            <Database size={16} />
            SQL ({courseData.sql.length} Modules)
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-gray-400">
              {moduleCount} modules &middot; Click to expand
            </span>
          </div>

          <div className="space-y-3">
            {currentCourse.map((module, i) => (
              <ModuleCard
                key={module.id}
                module={module}
                index={i}
                isOpen={openModules.includes(module.id)}
                onToggle={() => toggleModule(module.id)}
                icon={activeTab === "powerBI" ? BarChart3 : Database}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
