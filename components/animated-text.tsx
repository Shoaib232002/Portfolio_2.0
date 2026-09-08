"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1),
        );

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }

        if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
}
