"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, Eye, Users, Activity, Loader2 } from "lucide-react";

interface StatsData {
  total: number;
  unique: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1200; // 1.2 seconds count up duration
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: easeOutQuad
      const ease = progress * (2 - progress);
      const current = Math.floor(ease * (end - start) + start);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{displayValue.toLocaleString()}</span>;
}

export default function TrafficInsights() {
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function recordView() {
      try {
        const res = await fetch("/api/views", { method: "POST" });
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to record view:", err);
      } finally {
        setLoading(false);
      }
    }

    recordView();
  }, []);

  // Handle clicking outside to close popover
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Views Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#161616] hover:bg-[#1f1f1f] hover:border-white/20 transition-all duration-300 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer select-none group"
      >
        <Activity size={13} className="text-zinc-400 group-hover:text-white transition-colors" />
        {loading ? (
          <Loader2 size={12} className="animate-spin text-zinc-500" />
        ) : (
          <span className="font-bold text-white">
            {stats?.total ?? 0}
          </span>
        )}
        <span>VIEWS</span>
      </button>

      {/* Popover Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-[290px] bg-[#0c0c0e]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                Traffic Insights
              </span>
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
            </div>

            {/* Session Card with Grid Background */}
            <div
              className="relative border border-zinc-800 rounded-xl p-3.5 mb-3 overflow-hidden bg-[#111115]/50 flex items-center justify-between"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
                backgroundSize: "8px 8px",
              }}
            >
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide">
                  Session
                </h4>
                <p className="text-xs text-emerald-500 font-medium">
                  Tracked
                </p>
              </div>
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 border border-emerald-500/20">
                <BarChart2 size={16} />
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="flex gap-2.5">
              {/* Unique views */}
              <div className="flex-1 bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-3 flex flex-col justify-between h-[76px]">
                <div className="flex items-center justify-between text-zinc-500">
                  <span className="text-xs font-medium">Unique</span>
                  <Users size={14} className="text-zinc-500" />
                </div>
                <div className="text-white text-base font-bold font-mono flex items-baseline gap-1">
                  {stats ? <AnimatedNumber value={stats.unique} /> : "0"}
                  <span className="text-[10px] text-zinc-500 font-sans font-normal">views</span>
                </div>
              </div>

              {/* Total views */}
              <div className="flex-1 bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-3 flex flex-col justify-between h-[76px]">
                <div className="flex items-center justify-between text-zinc-500">
                  <span className="text-xs font-medium">Total</span>
                  <Eye size={14} className="text-zinc-500" />
                </div>
                <div className="text-white text-base font-bold font-mono flex items-baseline gap-1">
                  {stats ? <AnimatedNumber value={stats.total} /> : "0"}
                  <span className="text-[10px] text-zinc-500 font-sans font-normal">views</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
