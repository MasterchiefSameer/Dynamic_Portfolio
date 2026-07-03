"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Beyond Code", href: "#beyond-code" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 800);

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const first = personalInfo.initials[0];
  const second = personalInfo.initials[1];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        } py-5`}
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100px)",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            {first}
            <span className="text-blue-500">{second}</span>.
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-zinc-900 border-l border-white/5 flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-white/5">
            <a href="#" className="text-xl font-bold tracking-tighter text-white">
              {first}
              <span className="text-blue-500">{second}</span>.
            </a>
            <button onClick={() => setMobileOpen(false)} className="text-zinc-400">
              <X size={22} />
            </button>
          </div>
          <ul className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-3 px-4 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
