"use client";

import { useEffect, useRef } from "react";
import { personalInfo, stats } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll("[data-delay]");
    elements?.forEach((el) => {
      const delay = el.getAttribute("data-delay") || "0";
      (el as HTMLElement).style.animationDelay = delay + "ms";
      (el as HTMLElement).style.animationFillMode = "forwards";
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-60 sm:w-80 h-60 sm:h-80 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-6xl mx-auto w-full pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="inline-flex items-center gap-2 border border-border bg-surface/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-7 sm:mb-10 opacity-0" data-delay="0">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse2 flex-shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs text-muted tracking-wider">{personalInfo.availability}</span>
        </div>

        <div className="mb-4 sm:mb-6">
          <h1 className="font-display font-black leading-[0.88] tracking-tight opacity-0" style={{ fontSize: "clamp(3rem, 13vw, 9rem)" }} data-delay="150">
            <span className="block text-white">{personalInfo.name.split(" ")[0]}</span>
            <span className="block text-white">{personalInfo.name.split(" ")[1]}</span>
            <span className="block text-accent relative">
              Dev
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
            </span>
          </h1>
        </div>

        <p className="font-body text-muted text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-md leading-relaxed mb-8 sm:mb-12 opacity-0" data-delay="300">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-20 opacity-0" data-delay="450">
          <a href="#work" className="group flex items-center gap-2 bg-accent text-bg font-display font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-105">
            View My Work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href={personalInfo.resume} className="flex items-center gap-2 border border-border text-white font-display font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
            <Download size={14} />
            Resume
          </a>
          <div className="flex items-center gap-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 border border-border rounded-full flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-300">
              <Github size={15} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 border border-border rounded-full flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-300">
              <Linkedin size={15} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-border divide-y sm:divide-y-0 sm:divide-x divide-border opacity-0" data-delay="600">
          {stats.map((stat) => (
            <div key={stat.label} className="group px-4 sm:px-6 lg:px-8 py-4 sm:py-5 first:pl-0 last:pr-0">
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-accent transition-colors duration-300">{stat.value}</div>
              <div className="font-body text-[10px] sm:text-xs text-muted mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-accent to-transparent" />
        <span className="font-mono text-[9px] sm:text-[10px] text-muted tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
