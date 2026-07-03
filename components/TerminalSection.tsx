"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo, skillCategories, projects, achievements } from "@/lib/data";

interface HistoryItem {
  type: "command" | "output";
  text: React.ReactNode;
}

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "output",
      text: (
        <span className="text-zinc-100 flex items-center gap-2">
          🔥 Sameer Gautam Interactive Terminal Shell v2.6.0
        </span>
      ),
    },
    {
      type: "output",
      text: (
        <span>
          Type <span className="text-purple-400 font-semibold">help</span> to get available commands list.
        </span>
      ),
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom when history changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // Focus terminal input on click
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    const cleanCmd = trimmed.toLowerCase();

    // Add command to history list
    const newHistory: HistoryItem[] = [
      ...history,
      {
        type: "command",
        text: trimmed,
      },
    ];

    if (cleanCmd === "") {
      setHistory(newHistory);
      return;
    }

    // Add to cmd history recall
    const updatedCmdHistory = [trimmed, ...cmdHistory].slice(0, 50);
    setCmdHistory(updatedCmdHistory);
    setHistoryIdx(-1);

    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        response = (
          <div className="mt-1 space-y-1">
            <p className="text-purple-400 font-bold mb-1">Standard Available Commands:</p>
            <p className="pl-2">
              - <span className="text-blue-400 font-mono">about</span> : Information details regarding career background
            </p>
            <p className="pl-2">
              - <span className="text-blue-400 font-mono">skills</span> : Displays dynamic language framework stacks
            </p>
            <p className="pl-2">
              - <span className="text-blue-400 font-mono">projects</span> : Showlists active developmental prototypes
            </p>
            <p className="pl-2">
              - <span className="text-blue-400 font-mono">dsa</span> : Solved tracking matrix status
            </p>
            <p className="pl-2">
              - <span className="text-blue-400 font-mono">clear</span> : Clears standard prompt memory logs
            </p>
          </div>
        );
        break;

      case "about": {
        const nameStr = `${personalInfo.name.first} ${personalInfo.name.last}`;
        response = (
          <div className="mt-1 space-y-1.5 leading-relaxed text-zinc-300">
            <p>
              <span className="font-semibold text-white">{nameStr}</span>: {personalInfo.roles.join(", ")}. Currently building tools and solving systems.
            </p>
            <p>
              <span className="text-zinc-500">Education:</span> B.Tech in Computer Science and Engineering at Chhatrapati Shahu Ji Maharaj University, Kanpur (2022 - 2026).
            </p>
            <p>
              <span className="text-zinc-500">Location:</span> {personalInfo.location}.
            </p>
          </div>
        );
        break;
      }

      case "skills":
        response = (
          <div className="mt-1 space-y-2 text-zinc-300">
            <p className="text-emerald-400 font-bold">Dynamic Language & Framework Stacks:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 pl-2">
              {skillCategories.map((cat, idx) => (
                <p key={idx}>
                  <span className="text-blue-400 font-mono">{cat.category}:</span>{" "}
                  {cat.items.join(", ")}
                </p>
              ))}
            </div>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="mt-1 space-y-3 text-zinc-300">
            <p className="text-amber-400 font-bold">Active Developmental Prototypes:</p>
            <div className="space-y-2.5 pl-2 font-light">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <p className="font-semibold text-white">
                    - {proj.name}{" "}
                    <span className="text-xs font-mono text-zinc-500">
                      ({proj.techTags.slice(0, 4).join(" • ")}
                      {proj.techTags.length > 4 && " • ..."})
                    </span>
                  </p>
                  <p className="text-xs text-zinc-400 pl-3">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "dsa": {
        const leetcodeAch = achievements.find(
          (a) => a.title?.toLowerCase().includes("leetcode") || a.description?.toLowerCase().includes("leetcode")
        );
        const problemSolvingAch = achievements.find(
          (a) => a.value?.toLowerCase().includes("problem solving") || a.description?.toLowerCase().includes("solved")
        );
        const contestRankAch = achievements.find(
          (a) => a.title?.toLowerCase().includes("naukri") || a.description?.toLowerCase().includes("contest")
        );

        response = (
          <div className="mt-1 space-y-1.5 text-zinc-300">
            <p className="text-red-400 font-bold">Solved Tracking Matrix Status:</p>
            <div className="pl-2 space-y-1 text-sm">
              <p>
                - <span className="text-zinc-500">LeetCode Rating:</span> {leetcodeAch ? leetcodeAch.value : "600+ Problems"} ({leetcodeAch ? leetcodeAch.metric : "Top 24% globally"})
              </p>
              <p>
                - <span className="text-zinc-500">Solved Count:</span> {problemSolvingAch ? problemSolvingAch.description.split(";")[0] : "Solved 500+ problems across LeetCode, CodeChef, and GeeksforGeeks"}
              </p>
              <p>
                - <span className="text-zinc-500">Contest Standing:</span> {contestRankAch ? contestRankAch.metric : "Ranked in top 16% in multiple coding contests"}
              </p>
            </div>
          </div>
        );
        break;
      }

      case "whoami": {
        const nameStr = `${personalInfo.name.first} ${personalInfo.name.last}`;
        response = (
          <p className="text-zinc-300">
            {nameStr}: {personalInfo.roles.join(", ")}. Currently building tools and solving systems.
          </p>
        );
        break;
      }

      case "clear":
        setHistory([]);
        return;

      case "ls":
        response = (
          <p className="text-zinc-400 font-mono flex gap-4">
            <span>about</span>
            <span>skills</span>
            <span>projects</span>
            <span>dsa</span>
          </p>
        );
        break;

      case "sudo":
        response = <p className="text-red-400 font-mono">guest is not in the sudoers file. This incident will be reported.</p>;
        break;

      default:
        response = (
          <p className="text-zinc-500 font-mono">
            sh: command not found: <span className="text-zinc-300">{trimmed}</span>. Type <span className="text-purple-400">help</span> for commands.
          </p>
        );
    }

    setHistory([...newHistory, { type: "output", text: response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIdx(nextIdx);
          setInput(cmdHistory[nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const prevIdx = historyIdx - 1;
      if (prevIdx >= 0) {
        setHistoryIdx(prevIdx);
        setInput(cmdHistory[prevIdx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <section id="terminal" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-1/2 w-[700px] h-[700px] bg-purple-900/5 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-3">
            Interactive Terminal
          </h2>
          <p className="text-zinc-400 text-sm font-light max-w-lg mx-auto">
            Interact with the portfolio directly using CLI commands in a simulated shell environment.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full rounded-2xl border border-white/5 bg-[#050811]/90 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col font-mono text-sm leading-relaxed"
          style={{ height: "420px" }}
          onClick={focusInput}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-zinc-950/70 select-none">
            {/* Windows Controls */}
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] block border border-black/10" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] block border border-black/10" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] block border border-black/10" />
            </div>
            {/* Title */}
            <span className="text-xs text-zinc-500 font-mono pr-8">
              terminal://sameer_gautam.sh
            </span>
            <div />
          </div>

          {/* Terminal Logs Body */}
          <div
            ref={containerRef}
            className="flex-1 p-6 overflow-y-auto space-y-2.5 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent text-zinc-300"
          >
            {history.map((item, idx) => (
              <div key={idx} className="whitespace-pre-wrap">
                {item.type === "command" ? (
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-semibold select-none">guest@sameer:~$</span>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ) : (
                  <div className="text-zinc-300">{item.text}</div>
                )}
              </div>
            ))}
          </div>

          {/* Active Input Line */}
          <div className="px-6 py-4 bg-zinc-950/40 border-t border-white/5 flex items-center gap-2 select-none">
            <span className="text-purple-400 font-semibold shrink-0">guest@sameer:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent text-white font-medium border-none outline-none caret-purple-400 p-0 m-0 font-mono placeholder:text-zinc-700"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
