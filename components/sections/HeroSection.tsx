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
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
      ref={containerRef}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full pt-32 pb-20">
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 border border-border bg-surface/50 rounded-full px-4 py-2 mb-10 opacity-0"
          data-delay="0"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          <span className="font-mono text-xs text-muted tracking-wider">
            {personalInfo.availability}
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-6">
          <h1
            className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight opacity-0"
            data-delay="150"
          >
            <span className="block text-white">{personalInfo.name.split(" ")[0]}</span>
            <span className="block text-white">{personalInfo.name.split(" ")[1]}</span>
            <span className="block text-accent relative">
              Dev
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-muted text-lg sm:text-xl max-w-lg leading-relaxed mb-12 opacity-0"
          data-delay="300"
        >
          {personalInfo.tagline}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center gap-4 mb-20 opacity-0"
          data-delay="450"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 bg-accent text-bg font-display font-bold text-sm px-7 py-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,245,66,0.3)]"
          >
            View My Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <a
            href={personalInfo.resume}
            className="flex items-center gap-2 border border-border text-white font-display font-bold text-sm px-7 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            <Download size={16} />
            Resume
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-300"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-border border-t border-b border-border py-6 opacity-0"
          data-delay="600"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="sm:px-8 first:pl-0 last:pr-0 group">
              <div className="font-display text-3xl sm:text-4xl font-black text-white group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </div>
              <div className="font-body text-xs text-muted mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent to-transparent" />
        <span className="font-mono text-[10px] text-muted tracking-widest rotate-0">
          SCROLL
        </span>
      </div>
    </section>
  );
}
