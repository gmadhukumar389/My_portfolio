"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { useState } from "react";
import { BarChart3, Database, ChevronDown } from "lucide-react";

const icons = [BarChart3, Database];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="projects" className="relative py-24 bg-[#F8F9FA]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="text-[#1A73E8]">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-[#1A73E8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => {
            const Icon = icons[i] || BarChart3;
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="material-card rounded-2xl overflow-hidden shadow-google"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 md:p-8 flex items-start justify-between text-left group"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-[#1A73E8] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-[#1A73E8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary mt-2">{project.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[#1A73E8] mt-2"
                  >
                    <ChevronDown size={24} />
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
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="border-t border-border-light pt-6">
                          <ul className="grid md:grid-cols-2 gap-3">
                            {project.details.map((detail, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-3 text-sm text-text-secondary"
                              >
                                <span className="text-[#1A73E8] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1A73E8] flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
