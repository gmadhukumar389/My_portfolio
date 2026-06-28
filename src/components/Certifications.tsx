"use client";

import { motion } from "framer-motion";
import { certifications, achievements, education } from "@/lib/data";
import { Award, GraduationCap, Trophy, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Certifications & <span className="text-[#1A73E8]">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-[#1A73E8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="material-card p-6 rounded-2xl shadow-google"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#1A73E8]" />
              <h3 className="text-xl font-bold text-text-primary">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-[#1A73E8] pl-4"
                >
                  <h4 className="text-sm font-semibold text-text-primary">{cert.title}</h4>
                  <p className="text-xs text-[#1A73E8] mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-text-tertiary mt-1">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="material-card p-6 rounded-2xl shadow-google"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-[#1A73E8]" />
              <h3 className="text-xl font-bold text-text-primary">Key Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{ach}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="material-card p-6 rounded-2xl shadow-google"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-[#1A73E8]" />
              <h3 className="text-xl font-bold text-text-primary">Education</h3>
            </div>
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-[#1A73E8] pl-4">
                <h4 className="text-sm font-semibold text-text-primary">{edu.degree}</h4>
                <p className="text-xs text-[#1A73E8] mt-0.5">{edu.institution}</p>
                <div className="flex gap-4 mt-2 text-xs text-text-tertiary">
                  <span>GPA: {edu.gpa}</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
