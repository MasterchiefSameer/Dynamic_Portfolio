"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { volunteering } from "@/lib/data";

export default function VolunteeringSection() {
  return (
    <section
      id="volunteering"
      className="py-32 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-900/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-10 bg-zinc-700" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Community
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Volunteering &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Leadership
            </span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl">
            Beyond the code — contributing to academic conferences, developer communities, and campus initiatives.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" />

          <div className="space-y-12">
            {volunteering.map((item, idx) => (
              <motion.div
                key={item.id}
                className="relative pl-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-zinc-900 ring-2 transition-all duration-300"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 10px ${item.color}55`,
                    ringColor: item.color,
                  }}
                />

                {/* Card */}
                <motion.div
                  className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/70 backdrop-blur-sm transition-all duration-300 hover:border-white/10"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Role + Period row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                      {item.role}
                    </h3>
                    <span
                      className="text-xs font-mono whitespace-nowrap shrink-0 mt-0.5"
                      style={{ color: item.color }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Organization */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <Users className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <p className="text-sm text-zinc-400 font-medium">
                      {item.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Colored bottom accent */}
                  <div
                    className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ backgroundColor: item.color, opacity: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
