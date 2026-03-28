"use client";

import { useEffect, useRef } from "react";
import { personalInfo, techStack } from "@/lib/data";
import { MapPin, Mail, Calendar } from "lucide-react";

export default function AboutSection() {
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
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="section-animate flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">01.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            About Me
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <h2
              className="section-animate font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-8"
              style={{ transitionDelay: "100ms" }}
            >
              Turning ideas into{" "}
              <span className="text-accent">living, breathing</span>{" "}
              interfaces.
            </h2>
            <p
              className="section-animate font-body text-muted text-lg leading-relaxed mb-6"
              style={{ transitionDelay: "200ms" }}
            >
              {personalInfo.bio}
            </p>
            <p
              className="section-animate font-body text-muted leading-relaxed mb-10"
              style={{ transitionDelay: "250ms" }}
            >
              When I'm not coding, I'm studying design systems, contributing to
              open source, or exploring the latest web animation techniques. I
              believe great frontend work lives at the intersection of logic and
              aesthetics.
            </p>

            {/* Info chips */}
            <div
              className="section-animate flex flex-col gap-3"
              style={{ transitionDelay: "300ms" }}
            >
              {[
                { icon: MapPin, text: personalInfo.location },
                { icon: Mail, text: personalInfo.email },
                { icon: Calendar, text: "2 Years Experience" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={14} className="text-accent flex-shrink-0" />
                  <span className="font-mono text-sm text-muted">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="section-animate" style={{ transitionDelay: "200ms" }}>
            <div className="relative">
              {/* Decorative box */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-surface border border-border rounded-2xl p-8 gradient-border">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mb-6">
                  <span className="font-display text-3xl font-black text-accent">
                    AC
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {personalInfo.name}
                </h3>
                <p className="font-mono text-xs text-accent mb-6">
                  {personalInfo.role}
                </p>

                {/* Tech stack marquee */}
                <div className="overflow-hidden relative">
                  <p className="font-mono text-[10px] text-muted tracking-widest mb-3 uppercase">
                    Tech Stack
                  </p>
                  <div className="flex gap-2 animate-marquee whitespace-nowrap">
                    {[...techStack, ...techStack].map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 bg-bg border border-border rounded-full text-xs font-mono text-muted flex-shrink-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">Status</span>
                  <span className="flex items-center gap-2 font-mono text-xs text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {personalInfo.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
