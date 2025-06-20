"use client";

import { useEffect, useState, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
}

const TextScramble: React.FC<ScrambleTextProps> = ({
  text,
  as: Component = "span",
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  const [currentText, setCurrentText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const scramble = () => {
    let counter = 0;
    // Clear any existing interval before starting a new one
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((_, index) => {
          if (counter > index) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setCurrentText(scrambled);

      if (counter >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      counter += 1; // Faster scramble speed
    }, 30);
  };

  useEffect(() => {
    if (isInView) {
      scramble();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, text]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Component ref={ref} className={className}>
      {currentText}
    </Component>
  );
};

export default TextScramble;
