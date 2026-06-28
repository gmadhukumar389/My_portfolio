"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#F8F9FA]">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get In <span className="text-[#1A73E8]">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-[#1A73E8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4">Let&apos;s Connect</h3>
          <p className="text-text-secondary mb-10">
            Have a project, collaboration idea, or just want to say hi? Reach out!
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 material-card p-4 rounded-xl shadow-google hover:shadow-google-md transition-all group"
            >
              <Mail className="w-5 h-5 text-[#1A73E8] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-xs text-text-tertiary">Email</p>
                <span className="text-sm text-text-secondary group-hover:text-[#1A73E8] transition-colors">{personalInfo.email}</span>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-4 material-card p-4 rounded-xl shadow-google hover:shadow-google-md transition-all group"
            >
              <Phone className="w-5 h-5 text-[#1A73E8] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-xs text-text-tertiary">Phone</p>
                <span className="text-sm text-text-secondary group-hover:text-[#1A73E8] transition-colors">{personalInfo.phone}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 material-card p-4 rounded-xl shadow-google">
              <MapPin className="w-5 h-5 text-[#1A73E8]" />
              <div className="text-left">
                <p className="text-xs text-text-tertiary">Location</p>
                <span className="text-sm text-text-secondary">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-8">
            {[
  { icon: FaLinkedin, href: "#" },
  { icon: FaGithub, href: "#" },
  { icon: Mail, href: `mailto:${personalInfo.email}` },
].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-12 h-12 rounded-xl material-card shadow-google flex items-center justify-center text-text-tertiary hover:text-[#1A73E8] hover:border-[#1A73E8]/30 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
