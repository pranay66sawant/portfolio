"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "bg-bg/90 backdrop-blur-xl py-4" : "py-6")}>
        <div className={cn("absolute bottom-0 left-0 right-0 h-px bg-border transition-opacity duration-500", scrolled ? "opacity-100" : "opacity-0")} />
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold tracking-tight group">
            <span className="text-white group-hover:text-accent transition-colors duration-300">Pranay</span>
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={cn("font-body text-sm tracking-wide transition-colors duration-300 hover-underline", activeSection === link.href.slice(1) ? "text-accent" : "text-muted hover:text-white")}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden md:flex items-center gap-2 bg-accent text-bg font-display text-sm font-bold px-5 py-2.5 rounded-full hover:bg-accent-dim transition-all duration-300 hover:scale-105">
            Hire Me
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={cn("block h-px w-6 bg-white transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block h-px w-6 bg-white transition-all duration-300", menuOpen && "opacity-0")} />
            <span className={cn("block h-px w-6 bg-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </nav>

      <div className={cn("fixed inset-0 z-40 bg-bg/97 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 md:hidden overflow-hidden", menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }} className={cn("transition-all duration-400", menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="font-display text-4xl font-bold hover:text-accent transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex bg-accent text-bg font-display text-lg font-bold px-8 py-3 rounded-full">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}