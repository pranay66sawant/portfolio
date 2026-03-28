"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + "px";
        dotRef.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }
      requestAnimationFrame(animate);
    };

    const handleMouseEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1.8)";
        ringRef.current.style.borderColor = "rgba(200, 245, 66, 0.7)";
        ringRef.current.style.backgroundColor = "rgba(200, 245, 66, 0.05)";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(0)";
      }
    };

    const handleMouseLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        ringRef.current.style.borderColor = "rgba(200, 245, 66, 0.4)";
        ringRef.current.style.backgroundColor = "transparent";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    const links = document.querySelectorAll("a, button, [data-cursor]");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnterLink);
      link.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnterLink);
        link.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
