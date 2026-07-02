"use client";

import { motion } from "framer-motion";
import { hobbies } from "@/lib/data";

export default function BeyondCodeSection() {
  return (
    <section
      id="beyond-code"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Background glowing blur effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-zinc-800/10 rounded-full blur-[130px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-zinc-900/20 rounded-full blur-[100px] pointer-events-none" />
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
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            Beyond Code
          </h2>
          
          {/* Fading Divider and Subtitle */}
          <div className="flex items-center justify-center gap-4 mt-2 max-w-xl mx-auto">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-700" />
            <p className="text-zinc-400 text-sm md:text-base italic font-light shrink-0">
              &ldquo;Life is more fun when you have hobbies&rdquo;
            </p>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-700" />
          </div>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              className="group relative flex flex-col items-center text-center p-6 pt-8 pb-10 rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ 
                y: -6, 
                boxShadow: `0 12px 30px -10px ${hobby.shadowColor}`,
                backgroundColor: "rgba(24, 24, 27, 0.6)"
              }}
            >
              {/* Bottom Colored Bar */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[4px] transition-all duration-500 group-hover:h-[6px] group-hover:brightness-125"
                style={{ backgroundColor: hobby.color }}
              />

              {/* Icon Container with Glow */}
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-zinc-900/70 border border-zinc-800/80 group-hover:border-zinc-700/80 transition-colors duration-500">
                {/* Accent radial glow behind the emoji */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${hobby.color} 0%, transparent 70%)` }}
                />
                <span className="text-3xl relative z-10 select-none transform transition-transform duration-500 group-hover:scale-115">
                  {hobby.emoji}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors duration-300">
                {hobby.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-300">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
