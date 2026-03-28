"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Send, Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.querySelectorAll(".section-animate").forEach((el) => el.classList.add("visible"));
      });
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    { icon: Github, label: "GitHub", href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: Twitter, label: "Twitter", href: personalInfo.twitter },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-animate flex items-center gap-3 mb-10 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">05.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Contact</span>
          <div className="flex-1 h-px bg-border max-w-[100px] sm:max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          <div>
            <h2 className="section-animate font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-6" style={{ transitionDelay: "100ms" }}>
              Let's build something <span className="text-accent">great together</span>
            </h2>
            <p className="section-animate font-body text-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-7 sm:mb-10" style={{ transitionDelay: "200ms" }}>
              I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a friendly hello. My inbox is always open.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="section-animate group inline-flex items-center gap-3 text-white hover:text-accent transition-colors duration-300 mb-8 sm:mb-12" style={{ transitionDelay: "300ms" }}>
              <Mail size={18} className="text-accent flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm hover-underline break-all">{personalInfo.email}</span>
              <ArrowRight size={13} className="text-muted group-hover:translate-x-1 group-hover:text-accent transition-all duration-300 flex-shrink-0" />
            </a>
            <div className="section-animate flex flex-wrap items-center gap-2 sm:gap-3" style={{ transitionDelay: "400ms" }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="group flex items-center gap-2 border border-border rounded-full px-3 sm:px-5 py-2 sm:py-2.5 hover:border-accent transition-all duration-300">
                  <Icon size={13} className="text-muted group-hover:text-accent transition-colors duration-300" />
                  <span className="font-mono text-[10px] sm:text-xs text-muted group-hover:text-accent transition-colors duration-300">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="section-animate" style={{ transitionDelay: "200ms" }}>
            <div className="bg-surface border border-border rounded-2xl p-5 sm:p-8 gradient-border">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="font-mono text-[10px] sm:text-xs text-muted tracking-widest uppercase block mb-2">Name</label>
                  <input type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Your name" required
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 sm:py-3.5 font-body text-xs sm:text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300" />
                </div>
                <div>
                  <label className="font-mono text-[10px] sm:text-xs text-muted tracking-widest uppercase block mb-2">Email</label>
                  <input type="email" name="email" value={formState.email} onChange={handleChange} placeholder="you@example.com" required
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 sm:py-3.5 font-body text-xs sm:text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300" />
                </div>
                <div>
                  <label className="font-mono text-[10px] sm:text-xs text-muted tracking-widest uppercase block mb-2">Message</label>
                  <textarea name="message" value={formState.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={4}
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 sm:py-3.5 font-body text-xs sm:text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none" />
                </div>
                <button type="submit" disabled={status === "sending" || status === "sent"}
                  className={cn("w-full flex items-center justify-center gap-2 font-display font-bold text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl transition-all duration-300",
                    status === "sent" ? "bg-green-500/20 border border-green-500/40 text-green-400 cursor-default"
                    : status === "sending" ? "bg-accent/50 text-bg cursor-wait"
                    : "bg-accent text-bg hover:bg-white hover:scale-[1.02]"
                  )}>
                  {status === "sent" ? <>Message sent! I'll get back to you soon.</> 
                   : status === "sending" ? <><div className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin" />Sending...</>
                   : <><Send size={13} />Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
