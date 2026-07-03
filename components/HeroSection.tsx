"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, FileText, X, QrCode } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personalInfo, tickerSkills } from "@/lib/data";

// ── Codolio SVG icon (inline custom brand icon) ─────────────────────────────
function CodolioIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" strokeOpacity="0.5" />
    </svg>
  );
}

export default function HeroSection() {
  const mouseRef = useRef<HTMLDivElement>(null);
  const [qrOpen, setQrOpen] = useState(false);

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

  // Close QR on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setQrOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const duplicatedTicker = [...tickerSkills, ...tickerSkills];
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(personalInfo.linkedin)}&bgcolor=09090b&color=a78bfa&format=png&margin=12`;

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
          {/* CTA Buttons row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* View Selected Works */}
            <a
              href="#projects"
              className="group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-500"
            >
              <span className="text-lg font-medium tracking-wide border-b border-transparent group-hover:border-blue-400 transition-all">
                View Selected Works
              </span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
            </a>

            {/* Divider */}
            <span className="hidden sm:block h-5 w-px bg-zinc-700" />

            {/* View Resume */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <FileText className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium tracking-wide">View Resume</span>
            </a>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-7">
            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            {/* QR Code trigger — next to LinkedIn */}
            <button
              onClick={() => setQrOpen(true)}
              className="text-zinc-500 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform focus:outline-none"
              aria-label="LinkedIn QR Code"
              title="Scan to open LinkedIn"
            >
              <QrCode className="w-5 h-5" />
            </button>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Codolio */}
            <a
              href={personalInfo.codolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              aria-label="Codolio profile"
              title="Codolio — Competitive Coding Profile"
            >
              <CodolioIcon className="w-5 h-5" />
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

      {/* ── LinkedIn QR Code Modal ───────────────────────────────────────── */}
      <AnimatePresence>
        {qrOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setQrOpen(false)}
            />

            {/* Modal Card */}
            <motion.div
              className="relative z-10 bg-zinc-950 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-5 shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close button */}
              <button
                onClick={() => setQrOpen(false)}
                className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                aria-label="Close QR modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2 text-purple-400">
                <QrCode className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wide uppercase">Scan for LinkedIn</span>
              </div>

              {/* QR Code image */}
              <div className="rounded-xl overflow-hidden border border-purple-500/20 p-1 bg-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrUrl}
                  alt="LinkedIn QR Code"
                  width={220}
                  height={220}
                  className="rounded-lg"
                />
              </div>

              {/* Footer */}
              <div className="text-center space-y-1">
                <p className="text-xs text-zinc-500 font-mono">
                  Scan or{" "}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                  >
                    click here
                  </a>{" "}
                  to open LinkedIn
                </p>
                <p className="text-xs text-zinc-600 font-mono truncate max-w-[220px]">
                  {personalInfo.linkedin}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
