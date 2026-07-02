"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-black text-white relative py-32 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Professional Journey
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A timeline of building products, shipping features, and growing as an engineer.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-28">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Image Card */}
              <div className="w-full md:w-1/2 relative group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                  {/* Company background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-70"
                    style={{ backgroundImage: `url('${exp.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-zinc-300 font-mono flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: exp.accentColor }}
                      />
                      {exp.location}
                    </p>
                  </div>
                </div>
                {/* Offset shadow border */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full border rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
                  style={{ borderColor: `${exp.accentColor}25` }}
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {exp.dateRange}
                  </span>
                  {exp.isCurrent && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium border"
                      style={{ color: exp.accentColor, borderColor: `${exp.accentColor}50`, backgroundColor: `${exp.accentColor}15` }}
                    >
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
                  {exp.title}
                </h3>
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <span
                        className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"
                      />
                      <p className="text-zinc-400 leading-relaxed text-sm group-hover/item:text-zinc-300 transition-colors duration-300">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: exp.accentColor }}
                    />
                    {exp.tags}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
