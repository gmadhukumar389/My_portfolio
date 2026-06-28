"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, Award, Zap, Clock, TrendingUp, BarChart3 } from "lucide-react";

const iconMap = [Award, Zap, Clock, TrendingUp, BarChart3];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#F8F9FA]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Work <span className="text-[#1A73E8]">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-[#1A73E8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="material-card p-8 md:p-10 rounded-2xl shadow-google"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                {experience[0].role}
              </h3>
              <p className="text-[#1A73E8] text-lg font-medium mt-1">
                {experience[0].company}
              </p>
            </div>
            <div className="flex items-center gap-2 text-text-tertiary mt-2 md:mt-0">
              <Briefcase size={16} />
              <span>{experience[0].period}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#E8EAED]" />

            <div className="space-y-8 pl-12">
              {experience[0].achievements.map((achievement, i) => {
                const Icon = iconMap[i] || Award;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-white border-2 border-[#1A73E8] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-[#1A73E8]" />
                    </div>
                    <div className="material-card p-5 rounded-xl hover:shadow-google-md transition-all">
                      <div className="flex items-start gap-4">
                        <Icon className="w-5 h-5 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                        <p className="text-text-secondary leading-relaxed">{achievement}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
