"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Star,
  GraduationCap,
  Zap,
  Users,
  ExternalLink,
} from "lucide-react";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Achievements &amp; Recognition
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Milestones, certifications, and highlights from my journey.
          </p>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              className="group relative p-7 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm overflow-hidden hover:border-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: ach.color }}
              />

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors"
                    style={{ color: ach.color, backgroundColor: `${ach.color}15` }}
                  >
                    {iconMap[ach.icon]}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{ach.date}</span>
                </div>

                {/* Value */}
                <div className="mb-1">
                  <p className="text-2xl font-bold text-white">{ach.value}</p>
                  <p className="text-sm font-medium" style={{ color: ach.color }}>
                    {ach.metric}
                  </p>
                </div>

                {/* Title + Desc */}
                <h3 className="text-base font-semibold text-zinc-200 mt-3 mb-2">
                  {ach.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{ach.description}</p>

                {/* Link */}
                {ach.link && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white mt-4 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Profile
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
