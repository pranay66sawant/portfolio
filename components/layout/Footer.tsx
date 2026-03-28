import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-muted">
          © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with{" "}
          <span className="text-accent">♥</span>
        </p>
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
