"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, MapPin, BookOpen, Quote } from "lucide-react";
import { education } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-white" />,
  School: <School className="w-6 h-6 text-white" />,
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Background glowing blur effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-900/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-zinc-800" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Education
            </h2>
            <div className="h-px w-12 bg-zinc-800" />
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            My academic foundation and credentials.
          </p>
        </motion.div>

        {/* Education Cards Container */}
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="group relative p-8 md:p-10 rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md overflow-hidden hover:border-white/10 transition-all duration-500 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            >
              {/* Subtle radial glow matching accent color on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl -z-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${edu.color}, transparent 60%)`,
                }}
              />

              {/* Card Top Section */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                {/* Left: Icon and Title info */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="p-3.5 bg-zinc-900 border border-zinc-800/80 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    {iconMap[edu.icon] || <GraduationCap className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1 leading-snug group-hover:text-purple-400 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-zinc-400 font-medium text-sm md:text-base">
                      {edu.degree}
                    </p>
                    <div className="text-zinc-500 text-xs md:text-sm mt-2.5 flex items-center gap-1.5 font-light">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                {/* Right: Date and Grade Pills */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 w-full lg:w-auto mt-2 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-800/50">
                  <span className="bg-zinc-900/90 border border-zinc-800/80 text-zinc-400 text-xs md:text-sm px-4 py-2 rounded-full font-mono font-medium shadow-inner tracking-wide">
                    {edu.duration}
                  </span>
                  {edu.gpa && (
                    <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm px-3.5 py-1.5 rounded-full font-bold font-mono shadow-sm tracking-wide">
                      {edu.gpa}
                    </span>
                  )}
                </div>
              </div>

              {/* Separator line */}
              <hr className="border-zinc-800/80 my-7 md:my-8" />

              {/* Card Bottom Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
                {/* Bottom Left: Coursework list */}
                <div className="col-span-1 md:col-span-7 flex flex-col justify-start">
                  <div className="text-purple-400 text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-2 mb-5 font-mono">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    Coursework
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.coursework.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 text-xs md:text-sm px-3.5 py-2 rounded-xl hover:border-zinc-700/80 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:scale-[1.02]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Right: Quote Box */}
                {edu.quote && (
                  <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
                    <div className="relative bg-zinc-950/60 border border-zinc-900/60 p-6 md:p-7 rounded-2xl flex flex-col justify-between min-h-[130px] shadow-inner h-full">
                      {/* Styled decorative quotes in the background */}
                      <span className="absolute top-2 left-3 text-7xl font-serif text-purple-500/5 leading-none select-none pointer-events-none">
                        “
                      </span>
                      <p className="text-zinc-400 text-xs md:text-sm italic leading-relaxed pl-5 relative z-10 font-light text-zinc-400">
                        {edu.quote.text}
                      </p>
                      <span className="text-purple-400 text-xs font-mono font-medium self-end mt-4 relative z-10 tracking-wider">
                        — {edu.quote.author}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
