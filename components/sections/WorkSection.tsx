"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Frontend", "Full Stack"];

export default function WorkSection() {
  const ref = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.querySelectorAll(".section-animate").forEach((el) => el.classList.add("visible"));
      });
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getPlaceholderGradient = (id: number) => {
    const g = ["from-emerald-900/40 via-bg to-bg", "from-violet-900/40 via-bg to-bg", "from-orange-900/40 via-bg to-bg", "from-sky-900/40 via-bg to-bg"];
    return g[(id - 1) % g.length];
  };
  const getLabel = (title: string) => title.split(" ").map((w) => w[0]).join("").toUpperCase();

  return (
    <section id="work" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-animate flex items-center gap-3 mb-8 sm:mb-10">
          <span className="font-mono text-xs text-accent tracking-widest">03.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Selected Work</span>
          <div className="flex-1 h-px bg-border max-w-[100px] sm:max-w-xs" />
        </div>

        <div className="section-animate flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12" style={{ transitionDelay: "100ms" }}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Projects I've <span className="text-accent">Shipped</span>
          </h2>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={cn("font-mono text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300",
                  filter === cat ? "bg-accent text-bg border-accent font-bold" : "border-border text-muted hover:border-accent hover:text-accent"
                )}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured — 2 col on md+, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {filtered.filter((p) => p.featured).map((project, i) => (
            <div key={project.id} className="section-animate group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] gradient-border" style={{ transitionDelay: `${200 + i * 100}ms` }}>
              <div className={cn("h-40 sm:h-52 bg-gradient-to-br flex items-center justify-center relative overflow-hidden", getPlaceholderGradient(project.id))}>
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(200,245,66,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,245,66,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <span className="font-display text-4xl sm:text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500">{getLabel(project.title)}</span>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a href={project.github} target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-bg/80 backdrop-blur border border-border flex items-center justify-center text-white hover:text-accent transition-colors duration-200"><Github size={13} /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent flex items-center justify-center text-bg hover:bg-white transition-colors duration-200"><ExternalLink size={13} /></a>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="font-mono text-[10px] text-accent tracking-widest uppercase">{project.category}</span>
                  <span className="font-mono text-[10px] text-muted">{project.year}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-4 sm:mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t) => <span key={t} className="font-mono text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-1 bg-bg border border-border rounded-full text-muted">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Smaller cards — 2 col on sm+, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {filtered.filter((p) => !p.featured).map((project, i) => (
            <div key={project.id} className="section-animate group relative bg-surface border border-border rounded-2xl p-4 sm:p-6 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 gradient-border" style={{ transitionDelay: `${400 + i * 100}ms` }}>
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-widest uppercase block mb-1.5">{project.category} · {project.year}</span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                </div>
                <div className="flex gap-2 flex-shrink-0 ml-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors duration-200"><Github size={15} /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors duration-200"><ExternalLink size={15} /></a>
                </div>
              </div>
              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((t) => <span key={t} className="font-mono text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-1 bg-bg border border-border rounded-full text-muted">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="section-animate text-center mt-8 sm:mt-12" style={{ transitionDelay: "500ms" }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-muted hover:text-accent transition-colors duration-300">
            View all projects on GitHub
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
