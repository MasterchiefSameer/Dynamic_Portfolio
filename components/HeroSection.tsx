"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personalInfo, tickerSkills } from "@/lib/data";

export default function HeroSection() {
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseRef.current.style.transform = `translate(calc(-50% + ${x * 40}px), calc(-50% + ${y * 40}px))`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const duplicatedTicker = [...tickerSkills, ...tickerSkills];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        {/* Central blue glow — follows mouse */}
        <div
          ref={mouseRef}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen transition-transform duration-1000 ease-out"
        />
        {/* Top-right purple glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
        {/* Bottom-left indigo glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow animation-delay-2000" />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none animate-grain"
          style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Name */}
        <div className="mb-8 mix-blend-difference">
          <motion.h1
            className="text-[14vw] md:text-[10rem] font-bold leading-none tracking-tighter text-white select-none"
            initial={{ opacity: 0, letterSpacing: "0.8em", filter: "blur(20px)" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em", filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {personalInfo.name.first}
          </motion.h1>
          <motion.h1
            className="text-[14vw] md:text-[10rem] font-bold leading-none tracking-tighter text-zinc-500 select-none"
            initial={{ opacity: 0, letterSpacing: "0.8em", filter: "blur(20px)" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em", filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {personalInfo.name.last}
            <span className="text-blue-500">.</span>
          </motion.h1>
        </div>

        {/* Roles */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="hidden md:block h-px w-12 bg-zinc-700" />
          <p className="font-mono text-sm md:text-base text-zinc-400 tracking-[0.15em] uppercase text-center">
            {personalInfo.roles.map((role, i) => (
              <span key={role}>
                {role}
                {i < personalInfo.roles.length - 1 && (
                  <span className="text-zinc-600 px-3">/</span>
                )}
              </span>
            ))}
          </p>
          <div className="hidden md:block h-px w-12 bg-zinc-700" />
        </motion.div>

        {/* CTA + Socials */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-500"
          >
            <span className="text-lg font-medium tracking-wide border-b border-transparent group-hover:border-blue-400 transition-all">
              View Selected Works
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
          </a>

          <div className="flex gap-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Tech Ticker */}
      <motion.div
        className="absolute bottom-0 w-full py-6 border-t border-white/5 bg-gradient-to-t from-black to-transparent backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <div className="flex overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-700">
          <div className="flex gap-14 animate-infinite-scroll w-max pl-4 items-center">
            {duplicatedTicker.map((skill, i) => (
              <div
                key={`${skill.label}-${i}`}
                className="flex items-center gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.iconUrl}
                  alt={skill.label}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest whitespace-nowrap">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
