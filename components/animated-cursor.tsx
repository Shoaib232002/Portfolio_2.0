"use client";

import { useEffect, useState } from "react";

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Only render on client after hydration
    setMounted(true);
    
    // Check for dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updatePosition = (e: MouseEvent) => {
      // Add slight delay for smoother movement (trailing effect)
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setHidden(false);
      });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseEnterLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.hasAttribute('data-cursor-hover')
      ) {
        setLinkHovered(true);
      }
    };

    const handleMouseLeaveLink = () => {
      setLinkHovered(false);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", updatePosition);
    document.addEventListener("mouseleave", () => setHidden(true));
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseEnterLink);
    document.addEventListener("mouseout", handleMouseLeaveLink);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
      document.removeEventListener("mouseleave", () => setHidden(true));
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnterLink);
      document.removeEventListener("mouseout", handleMouseLeaveLink);
    };
  }, [mounted]);

  if (!mounted) return null;

  const cursorColor = isDarkMode ? "#00FFFF" : "rgba(0, 0, 0, 0.8)";
  const hoverColor = isDarkMode ? "#00FFFF" : "rgba(0, 0, 0, 0.5)";

  return (
    <>
      {/* Main cursor dot with pulsing animation */}
      <div
        className={`cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-100 ease-out ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-50" : "scale-100"}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
            linkHovered ? "w-6 h-6 mix-blend-difference bg-white" : "w-3 h-3"
          } transition-all duration-300 ease-out`}
          style={{
            backgroundColor: linkHovered ? hoverColor : cursorColor,
            boxShadow: linkHovered ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
          }}
        ></div>
      </div>

      {/* Outer ring with trailing effect */}
      <div
        className={`cursor-ring pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-all duration-500 ease-out ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-50 border-2" : "scale-100"} ${linkHovered ? "scale-150 !border-1" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: linkHovered ? "40px" : "30px",
          height: linkHovered ? "40px" : "30px",
          marginLeft: linkHovered ? "-20px" : "-15px",
          marginTop: linkHovered ? "-20px" : "-15px",
          borderColor: linkHovered ? hoverColor : cursorColor,
          borderWidth: linkHovered ? "1px" : "2px",
          filter: linkHovered ? 'drop-shadow(0 0 5px #00FFFF)' : 'none',
        }}
      ></div>

      {/* Optional trail effect (small dots following cursor) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={`pointer-events-none fixed top-0 left-0 z-[9997] rounded-full transition-transform duration-700 ease-out ${
            hidden ? "opacity-0" : "opacity-50"
          }`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: "4px",
            height: "4px",
            marginLeft: "-2px",
            marginTop: "-2px",
            backgroundColor: cursorColor,
            transitionDelay: `${i * 50}ms`,
          }}
        ></div>
      ))}

      <style jsx global>{`
        body {
          cursor: none;
        }

        * {
          cursor: none !important;
        }

        @media (pointer: coarse), (max-width: 768px) {
          body, * {
            cursor: auto !important;
          }
          .cursor-dot,
          .cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}