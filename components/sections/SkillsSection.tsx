"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && barRef.current) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = level + "%";
            }
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement!);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-white group-hover:text-accent transition-colors duration-300">
          {name}
        </span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-px bg-border overflow-hidden rounded-full">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-accent to-accent-dim rounded-full transition-all duration-1000 ease-out"
          style={{ width: "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-animate").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="section-animate flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">02.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            Skills & Tools
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Core skills with bars */}
          <div>
            <h2
              className="section-animate font-display text-3xl sm:text-4xl font-black text-white mb-12"
              style={{ transitionDelay: "100ms" }}
            >
              Core{" "}
              <span className="text-accent">Proficiency</span>
            </h2>
            <div className="space-y-8">
              {skills.core.map((skill, i) => (
                <div
                  key={skill.name}
                  className="section-animate"
                  style={{ transitionDelay: `${150 + i * 60}ms` }}
                >
                  <SkillBar name={skill.name} level={skill.level} delay={i * 80} />
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Learning */}
          <div>
            <h2
              className="section-animate font-display text-3xl sm:text-4xl font-black text-white mb-12"
              style={{ transitionDelay: "100ms" }}
            >
              Tools &{" "}
              <span className="text-accent">Ecosystem</span>
            </h2>

            {/* Tools grid */}
            <div
              className="section-animate mb-10"
              style={{ transitionDelay: "200ms" }}
            >
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
                Daily Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-4 py-2 border border-border rounded-full font-mono text-xs text-muted hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div
              className="section-animate bg-bg border border-border rounded-2xl p-6 gradient-border"
              style={{ transitionDelay: "300ms" }}
            >
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Currently Leveling Up
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.learning.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
