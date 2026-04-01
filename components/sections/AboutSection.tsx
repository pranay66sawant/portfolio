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
            entry.target.querySelectorAll(".section-animate").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-animate flex items-center gap-3 mb-10 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">01.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">About Me</span>
          <div className="flex-1 h-px bg-border max-w-[100px] sm:max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="section-animate font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 sm:mb-8" style={{ transitionDelay: "100ms" }}>
              I build{" "}
              <span className="text-accent">fast & scalable</span>{" "}
              web interfaces.
            </h2>
            <p className="section-animate font-body text-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6" style={{ transitionDelay: "200ms" }}>
              {personalInfo.bio}
            </p>
            <p className="section-animate font-body text-muted text-sm sm:text-base leading-relaxed mb-8 sm:mb-10" style={{ transitionDelay: "250ms" }}>
             When I'm not coding, I’m learning how to build better full stack systems and improve performance, scalability, and architecture.
            </p>
            <div className="section-animate flex flex-col gap-3" style={{ transitionDelay: "300ms" }}>
              {[{ icon: MapPin, text: personalInfo.location }, { icon: Mail, text: personalInfo.email }, { icon: Calendar, text: "2 Years Experience" }].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={13} className="text-accent flex-shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-muted">{text}</span>
                </div>
              ))}
            </div>
          </div>

         <div className="relative bg-surface border border-border rounded-2xl overflow-hidden gradient-border aspect-[4/4]">

  {/* Background Image */}
  <img
    src="/pranay4.jpg"
    alt="Profile"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay (dark layer for readability) */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative p-6 sm:p-8 z-10 h-full flex flex-col justify-end">
    
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mb-5 sm:mb-6 backdrop-blur">
      <span className="font-display text-2xl sm:text-3xl font-black text-accent">&lt;/&gt;</span>
    </div>

    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
      {personalInfo.name}
    </h3>

    <p className="font-mono text-xs text-accent mb-5 sm:mb-6">
      {personalInfo.role}
    </p>

    <div className="overflow-hidden relative">
      <p className="font-mono text-[10px] text-white tracking-widest mb-3 uppercase">
        Tech Stack
      </p>

      <div className="flex gap-2 animate-marquee whitespace-nowrap">
        {[...techStack, ...techStack].map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center px-2.5 sm:px-3 py-1 bg-bg/80 backdrop-blur border border-border rounded-full text-[10px] sm:text-xs font-mono text-accent-dim flex-shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border flex items-center justify-between">
      <span className="font-mono text-xs text-white">Status</span>

      <span className="flex items-center gap-2 font-mono text-xs text-accent">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {personalInfo.availability}
      </span>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}
