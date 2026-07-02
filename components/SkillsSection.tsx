"use client";

import { motion } from "framer-motion";
import {
  CodeXml,
  Layers,
  Database,
  Cloud,
  Wrench,
  BrainCircuit,
} from "lucide-react";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  CodeXml: <CodeXml className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6" />,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Ambient blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Technical Arsenal
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A curated stack of technologies for building high-performance, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              className="group relative h-full min-h-[240px] p-7 rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm overflow-hidden hover:border-white/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at top left, ${cat.color}18, transparent 60%)`,
                }}
              />

              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className="p-3 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-colors"
                    style={{ color: cat.color }}
                  >
                    {iconMap[cat.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:bg-white/10 hover:text-white hover:border-white/10 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
