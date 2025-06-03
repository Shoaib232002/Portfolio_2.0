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
        // Current text from the array
        const fullText = texts[currentTextIndex];

        // If deleting, remove the last character
        // If typing, add the next character
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1),
        );

        // If we've completed typing the current text
        if (!isDeleting && currentText === fullText) {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 1500);
        }

        // If we've deleted all characters
        if (isDeleting && currentText === "") {
          setIsDeleting(false);
          // Move to the next text in the array
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
