"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.hasAttribute("data-cursor-hover") ||
        target.classList.contains("hover-effect");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    const render = () => {
      const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor;

      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.18);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);

      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [mounted, isVisible]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-opacity duration-300 will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: isHovered ? "8px" : "6px",
          height: isHovered ? "8px" : "6px",
          marginLeft: isHovered ? "-4px" : "-3px",
          marginTop: isHovered ? "-4px" : "-3px",
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-200 ${
            isClicked
              ? "scale-50 bg-primary"
              : isHovered
              ? "scale-125 bg-primary shadow-[0_0_12px_rgba(139,92,246,0.9)]"
              : "bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)] dark:bg-primary"
          }`}
        />
      </div>

      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-all duration-300 ease-out will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          marginLeft: isHovered ? "-24px" : "-16px",
          marginTop: isHovered ? "-24px" : "-16px",
        }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-300 ${
            isClicked
              ? "scale-75 border-primary bg-primary/20"
              : isHovered
              ? "scale-100 border-primary bg-primary/10 shadow-[0_0_20px_rgba(139,92,246,0.3)] dark:border-primary dark:bg-primary/20"
              : "scale-100 border-primary/40 dark:border-primary/50"
          }`}
        />
      </div>

      <style jsx global>{`
        @media (min-width: 769px) and (pointer: fine) {
          body,
          a,
          button,
          input,
          textarea,
          select {
            cursor: none !important;
          }
        }

        @media (max-width: 768px), (pointer: coarse) {
          body,
          a,
          button,
          input,
          textarea,
          select {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}