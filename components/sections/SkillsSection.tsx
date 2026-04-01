"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";

const coreSkillMeta: Record<string, { icon: string; desc: string }> = {
  "React.js":      { icon: "⚛",  desc: "Component architecture, hooks, context, performance" },
  "Next.js":       { icon: "▲",  desc: "App Router, SSR, SSG, API routes, optimisation" },
  "TypeScript":    { icon: "TS", desc: "Strict typing, generics, utility types, DX" },
  "Tailwind CSS":  { icon: "✦",  desc: "Utility-first, responsive, design systems" },
  "PostgreSQL":    { icon: "🧩", desc: "Database design, queries, relational data handling" },
  "JavaScript":    { icon: "JS", desc: "ES2024, async patterns, DOM, Web APIs" },
  "Node.js":       { icon: "⬡",  desc: "API development, routing, server-side logic" },
  "REST API":      { icon: "⇄",  desc: "CRUD operations, authentication, data handling" },
};

const coreSkillNames = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "JavaScript",
  "Node.js",
  "REST API",
];

const categories = [
  { label: "Tools & Workflow",   items: skills.tools },
  { label: "Currently Learning", items: skills.learning },
];

const bottomStats = [
  { value: "15+", label: "Projects Built" },
  { value: "2+",  label: "Years Experience" },
  { value: "8+",  label: "Production Deployments" },
  { value: "⚡",  label: "Performance Focused" },
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".section-animate")
              .forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="section-animate flex items-center gap-3 mb-10 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">02.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Skills</span>
          <div className="flex-1 h-px bg-border max-w-[100px] sm:max-w-xs" />
        </div>

        {/* Heading */}
        <div className="section-animate mb-12 sm:mb-16" style={{ transitionDelay: "100ms" }}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
           Tools & Technologies
          </h2>
          <p className="font-body text-muted text-sm sm:text-base mt-3 max-w-md leading-relaxed">
            Technologies I use to build fast, scalable, and production-ready web applications.
          </p>
        </div>

        {/* Core skills — 2 cols mobile / 4 cols desktop */}
        <div
          className="section-animate grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
          style={{ transitionDelay: "200ms" }}
        >
          {coreSkillNames.map((name) => {
            const meta = coreSkillMeta[name] ?? { icon: "◆", desc: "Modern web technology" };
            return (
              <div
                key={name}
                className="group relative border border-border bg-surface/30 rounded-xl p-4 sm:p-5 hover:border-accent/40 hover:bg-surface/60 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-14 h-14 bg-accent/5 rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-bg border border-border flex items-center justify-center mb-3 sm:mb-4 group-hover:border-accent/30 transition-colors duration-300">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-accent leading-none">
                    {meta.icon}
                  </span>
                </div>

                <p className="font-display font-bold text-white text-xs sm:text-sm leading-tight mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {name}
                </p>
                <p className="font-mono text-[9px] sm:text-[10px] text-muted leading-relaxed">
                  {meta.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tools + Learning */}
        <div
          className="section-animate grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          style={{ transitionDelay: "350ms" }}
        >
          {categories.map(({ label, items }) => (
            <div
              key={label}
              className="border border-border bg-surface/20 rounded-xl p-5 sm:p-6"
            >
              <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 border border-border rounded-full font-mono text-[10px] sm:text-xs text-muted hover:border-accent/40 hover:text-accent transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div
          className="section-animate mt-10 sm:mt-14 border-t border-border pt-8 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-0 sm:divide-x divide-border"
          style={{ transitionDelay: "450ms" }}
        >
          {bottomStats.map(({ value, label }) => (
            <div key={label} className="sm:px-6 first:pl-0 last:pr-0">
              <p className="font-display text-2xl sm:text-3xl font-black text-white">{value}</p>
              <p className="font-mono text-[10px] text-muted mt-1 tracking-wide">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}