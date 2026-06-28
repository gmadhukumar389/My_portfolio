"use client";

import { motion } from "framer-motion";
import { personalInfo, experience } from "@/lib/data";
import { BarChart3, Database, LineChart, ShieldCheck } from "lucide-react";

const stats = [
  { icon: BarChart3, label: "Power BI Reports", value: "50+" },
  { icon: Database, label: "SQL Queries Optimized", value: "200+" },
  { icon: LineChart, label: "Dashboards Built", value: "30+" },
  { icon: ShieldCheck, label: "Years Experience", value: "4+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="text-[#1A73E8]">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#1A73E8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="material-card p-8 rounded-2xl shadow-google"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">Who I Am</h3>
            <p className="text-text-secondary leading-relaxed text-lg">{personalInfo.summary}</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="text-[#1A73E8] font-semibold w-20">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#1A73E8] transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="text-[#1A73E8] font-semibold w-20">Phone:</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="text-[#1A73E8] font-semibold w-20">Location:</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="material-card p-8 rounded-2xl shadow-google"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {experience[0].role}
            </h3>
            <p className="text-text-secondary font-medium mb-4">
              <span className="text-text-primary">{experience[0].company}</span>
              <span className="text-text-tertiary ml-2">| {experience[0].period}</span>
            </p>
            <ul className="space-y-3">
              {experience[0].achievements.slice(0, 3).map((ach, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-[#1A73E8] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1A73E8] flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="material-card p-6 rounded-xl text-center group hover:shadow-google-md transition-all"
            >
              <stat.icon className="w-8 h-8 text-[#1A73E8] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-tertiary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
