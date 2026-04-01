"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Send, Mail, Github, Linkedin, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "917722046322";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.querySelectorAll(".section-animate").forEach((el) => el.classList.add("visible"));
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xdapdjoy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _replyto: formState.email,
          _subject: `Portfolio enquiry from ${formState.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const socials = [
    { icon: Github,   label: "GitHub",   href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.938 9.938 0 01-5.034-1.362l-.361-.214-3.741.981.998-3.648-.235-.374A9.938 9.938 0 012.062 12C2.062 6.51 6.51 2.062 12 2.062S21.938 6.51 21.938 12 17.49 21.938 12 21.938z"/>
        </svg>
      ),
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Pranay%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!`,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-20 px-4 sm:px-6 relative"
      style={{ zIndex: 10, isolation: "isolate" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-animate flex items-center gap-3 mb-10 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">05.</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Contact</span>
          <div className="flex-1 h-px bg-border max-w-[100px] sm:max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">

          {/* Left */}
          <div className="relative" style={{ zIndex: 10 }}>
            <h2
              className="section-animate font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-6"
              style={{ transitionDelay: "100ms" }}
            >
              Let's build something <span className="text-accent">Meaningful</span>
            </h2>
            <p
              className="section-animate font-body text-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-7 sm:mb-10"
              style={{ transitionDelay: "200ms" }}
            >
              I design and develop high-performance web applications with a focus on real-world usability and clean architecture. Currently open to opportunities, freelance work, and collaborations.
            </p>

            <button
              onClick={handleEmailClick}
              className="section-animate group inline-flex items-center gap-3 text-white hover:text-accent transition-colors duration-300 mb-8 sm:mb-12 w-full sm:w-auto text-left"
              style={{ transitionDelay: "300ms" }}
              title="Click to copy email"
            >
              <Mail size={18} className="text-accent flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm break-all">{personalInfo.email}</span>
              <span className="ml-1 flex-shrink-0 text-muted group-hover:text-accent transition-colors duration-300">
                {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
              </span>
            </button>

            {copied && (
              <p className="font-mono text-[10px] text-green-400 -mt-6 mb-8 ml-7">
                Copied to clipboard!
              </p>
            )}

            <div
              className="section-animate flex flex-wrap items-center gap-2 sm:gap-3"
              style={{ transitionDelay: "400ms" }}
            >
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 border border-border rounded-full px-3 sm:px-5 py-2 sm:py-2.5 hover:border-accent transition-all duration-300"
                >
                  <span className="text-muted group-hover:text-accent transition-colors duration-300">
                    <Icon size={13} />
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-muted group-hover:text-accent transition-colors duration-300">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="section-animate relative"
            style={{ transitionDelay: "200ms", zIndex: 20, isolation: "isolate" }}
          >
            <div className="bg-surface border border-border rounded-2xl p-5 sm:p-8 gradient-border">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Check size={24} className="text-green-400" />
                  </div>
                  <p className="font-display font-bold text-white text-lg sm:text-xl">
                    Message submitted!
                  </p>
                  <p className="font-body text-muted text-sm max-w-xs leading-relaxed">
                    Thanks for reaching out. I'll get back to you at{" "}
                    <span className="text-accent">{formState.email || "your email"}</span> as soon
                    as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="font-mono text-[10px] sm:text-xs text-muted tracking-widest uppercase block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 sm:py-3.5 font-body text-xs sm:text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 relative"
                      style={{ zIndex: 30, pointerEvents: "auto" }}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] sm:text-xs text-muted tracking-widest uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 sm:py-3.5 font-body text-xs sm:text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 relative"
                      style={{ zIndex: 30, pointerEvents: "auto" }}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] sm:text-xs text-muted tracking-widest uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={4}
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 sm:py-3.5 font-body text-xs sm:text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none relative"
                      style={{ zIndex: 30, pointerEvents: "auto" }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="font-mono text-[10px] text-red-400">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 font-display font-bold text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl transition-all duration-300 relative",
                      status === "sending"
                        ? "bg-accent/50 text-bg cursor-wait"
                        : "bg-accent text-bg hover:bg-white hover:scale-[1.02]"
                    )}
                    style={{ zIndex: 30, pointerEvents: "auto" }}
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}