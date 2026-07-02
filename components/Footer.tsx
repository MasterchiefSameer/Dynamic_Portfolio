"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const first = personalInfo.initials[0];
  const second = personalInfo.initials[1];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tighter">
            {first}
            <span className="text-blue-500">{second}</span>.
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="text-sm text-zinc-600">
              © {year} {personalInfo.name.first} {personalInfo.name.last}. All rights reserved.
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm text-zinc-600 hover:text-white transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
