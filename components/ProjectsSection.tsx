"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/data";

function CodeMockup({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="w-full max-w-sm bg-[#0D0D0D] rounded-xl border border-white/5 shadow-2xl overflow-hidden transform rotate-[-2deg] transition-transform duration-700 group-hover:rotate-0">
      {/* Title bar */}
      <div className="h-8 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="ml-3 text-[10px] text-zinc-500 font-mono">service.ts</div>
      </div>
      {/* Code */}
      <div className="p-6 space-y-2 font-mono text-xs md:text-sm">
        <div className="flex gap-2">
          <span className="text-purple-400">import</span>
          <span className="text-white">{project.codeSnippet.importName}</span>
          <span className="text-purple-400">from</span>
          <span className="text-green-400">&apos;{project.codeSnippet.moduleName}&apos;</span>
        </div>
        <div className="h-3" />
        <div className="flex gap-2">
          <span className="text-blue-400">class</span>
          <span className="text-yellow-400">{project.codeSnippet.className}</span>
          <span className="text-zinc-500">{"{"}</span>
        </div>
        <div className="pl-4 flex gap-2">
          <span className="text-purple-400">async</span>
          <span className="text-blue-400">initialize</span>
          <span className="text-zinc-300">()</span>
          <span className="text-zinc-500">{"{"}</span>
        </div>
        <div className="pl-8 space-y-2">
          <div className="text-zinc-500">{"// "}{project.codeSnippet.comment}</div>
          <div className="flex gap-2">
            <span className="text-purple-400">await</span>
            <span className="text-zinc-300">db.connect();</span>
          </div>
          <div className="flex gap-2">
            <span className="text-purple-400">return</span>
            <span className="text-green-400">true</span>
            <span className="text-zinc-300">;</span>
          </div>
        </div>
        <div className="pl-4 text-zinc-500">{"}"}</div>
        <div className="text-zinc-500">{"}"}</div>
      </div>
      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-28 h-28 blur-[60px] opacity-20 pointer-events-none"
        style={{ backgroundColor: project.accentColor }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black text-white py-32 relative overflow-hidden">
      {/* Subtle top/bottom blurs */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Architecting scalable applications and immersive digital experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Mockup panel */}
              <div className="w-full md:w-1/2 relative group">
                {/* Ambient glow on hover */}
                <div
                  className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(to right, ${project.accentColor}20, ${project.accentColor}10)`,
                  }}
                />
                <div className="relative aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] flex items-center justify-center p-8 md:p-12">
                  <CodeMockup project={project} />
                  {/* Noise overlay */}
                  <div
                    className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        "url('https://grainy-gradients.vercel.app/noise.svg')",
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-7">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {project.number}
                    </span>
                    <span className="h-px w-10 bg-zinc-800" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
                    {project.name}
                  </h3>
                  <p className="text-lg text-zinc-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm md:text-base">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex items-center gap-6 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-white font-medium hover:text-zinc-300 transition-colors"
                  >
                    <GithubIcon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                    <span>View Source</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-zinc-400 hover:text-white font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
