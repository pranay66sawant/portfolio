"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-32 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="section-animate flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">04.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            Experience
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <h2
          className="section-animate font-display text-4xl sm:text-5xl font-black text-white mb-16"
          style={{ transitionDelay: "100ms" }}
        >
          Where I've{" "}
          <span className="text-accent">Worked</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className="section-animate relative md:pl-16"
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-px">
                  <div className="-translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-bg ring-4 ring-accent/20 flex-shrink-0" />
                </div>

                <div className="group bg-bg border border-border rounded-2xl p-7 hover:border-accent/40 transition-all duration-500 gradient-border hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-1">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-accent">
                          {job.company}
                        </span>
                        {i === 0 && (
                          <span className="font-mono text-[10px] px-2.5 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-muted">{job.period}</span>
                      <p className="font-mono text-[10px] text-muted/60 mt-0.5">
                        {job.duration}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-muted leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {job.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3">
                        <CheckCircle2
                          size={14}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span className="font-body text-sm text-muted/80">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-3 py-1 bg-surface border border-border rounded-full text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
