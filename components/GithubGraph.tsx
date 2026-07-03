"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContributionCalendar } from "react-contribution-calendar";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/lib/data";

const GITHUB_USERNAME = "MasterchiefSameer";

// Custom theme matching the portfolio's dark blue/purple palette
const portfolioTheme = {
  level0: "#0d0d1a",   // near-black base (empty cells)
  level1: "#1a1a4e",   // deep indigo
  level2: "#2d3a9e",   // rich blue
  level3: "#4f6fef",   // bright blue
  level4: "#818cf8",   // vibrant indigo-purple
};

interface RawContribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionApiResponse {
  total: Record<string, number>;
  contributions: RawContribution[];
}

export default function GithubGraph() {
  const [calendarData, setCalendarData] = useState<{ [key: string]: { level: number; data?: { count: number } } }[]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
          { next: { revalidate: 3600 } } as RequestInit
        );
        if (!res.ok) throw new Error("API error");

        const json: ContributionApiResponse = await res.json();

        // Map API data → react-contribution-calendar format
        const mapped = json.contributions
          .filter((c) => c.level > 0)
          .map((c) => ({
            [c.date]: { level: c.level, data: { count: c.count } },
          }));

        setCalendarData(mapped);

        // Total from "lastYear" key or sum all years
        const total =
          json.total["lastYear"] ??
          Object.values(json.total).reduce((a, b) => a + b, 0);
        setTotalContributions(total);

        // Date range from the fetched data
        if (json.contributions.length > 0) {
          setStartDate(json.contributions[0].date);
          setEndDate(json.contributions[json.contributions.length - 1].date);
        }

        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  return (
    <section id="github-graph" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[500px] bg-blue-900/6 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-indigo-900/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-zinc-800" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              GitHub Contributions
            </h2>
            <div className="h-px w-12 bg-zinc-800" />
          </div>

          {/* Total Contribution Count badge */}
          {!loading && !error && totalContributions !== null && (
            <motion.div
              className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-mono"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse inline-block" />
              <span>
                <span className="font-bold text-white">{totalContributions}</span> contributions in the last year
              </span>
            </motion.div>
          )}

          <p className="text-zinc-400 text-sm font-light max-w-md mx-auto mt-3">
            Real-time coding activity pulled from GitHub — each square is a day of commits.
          </p>
        </motion.div>

        {/* Contribution Graph Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="p-6 md:p-8 rounded-2xl border border-white/5 bg-zinc-950/60 backdrop-blur-md overflow-x-auto shadow-2xl"
        >
          {loading ? (
            /* Skeleton loader */
            <div className="min-w-[640px] space-y-2 animate-pulse py-4">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-3 bg-zinc-800 rounded flex-1" />
                ))}
              </div>
              {Array.from({ length: 7 }).map((_, row) => (
                <div key={row} className="flex gap-1">
                  {Array.from({ length: 53 }).map((_, col) => (
                    <div
                      key={col}
                      className="w-[13px] h-[13px] rounded-sm bg-zinc-800/60"
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="min-w-[640px] py-12 text-center text-zinc-500 font-mono text-sm">
              <p>⚠ Could not load GitHub contributions.</p>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View on GitHub instead →
              </a>
            </div>
          ) : (
            <div className="min-w-[640px]">
              <ContributionCalendar
                data={calendarData}
                dateOptions={{
                  start: startDate,
                  end: endDate,
                  daysOfTheWeek: ["", "", "", "", "", "", ""],
                }}
                styleOptions={{
                  theme: portfolioTheme,
                  textColor: "#52525b",
                  cx: 13,
                  cy: 13,
                  cr: 3,
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Footer row — legend + GitHub link */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Legend */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span>Less</span>
            {Object.values(portfolioTheme).map((color, idx) => (
              <span
                key={idx}
                className="w-3 h-3 rounded-sm inline-block border border-white/5"
                style={{ backgroundColor: color }}
              />
            ))}
            <span>More</span>
          </div>

          {/* GitHub profile link */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors duration-300 font-mono group"
          >
            <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{personalInfo.github.replace("https://", "")}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
