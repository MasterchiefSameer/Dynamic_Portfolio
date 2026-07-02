"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulate sending (replace with real service like Formspree/EmailJS)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormState]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />

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
            Let&apos;s Build Something Together
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {personalInfo.availability}. Whether you have a role in mind, a
                project idea, or just want to connect — my inbox is always open.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
              >
                <Mail className="w-5 h-5" />
                <span className="border-b border-blue-400/40 group-hover:border-blue-300 transition-colors">
                  {personalInfo.email}
                </span>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <MapPin className="w-4 h-4 text-zinc-500" />
              {personalInfo.location}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              {personalInfo.twitter && (
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-105"
                  aria-label="Twitter"
                >
                  <TwitterXIcon className="w-5 h-5" />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-105"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-zinc-400">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  className="text-sm text-zinc-500 hover:text-zinc-300 mt-2 underline"
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-7 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm space-y-5"
                noValidate
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? "border-red-500/50 focus:ring-red-500/30"
                          : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? "border-red-500/50 focus:ring-red-500/30"
                          : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors resize-none ${
                      errors.message
                        ? "border-red-500/50 focus:ring-red-500/30"
                        : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
