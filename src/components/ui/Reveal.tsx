import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    const node = ref.current;
    if (!node) return () => mediaQuery.removeEventListener("change", handleChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-64px 0px", threshold: 0.08 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const hiddenTranslate = reducedMotion
    ? "translate-x-0 translate-y-0"
    : direction === "up"
    ? "translate-y-6"
    : direction === "down"
    ? "-translate-y-6"
    : direction === "left"
    ? "translate-x-6"
    : direction === "right"
    ? "-translate-x-6"
    : "translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${Math.round(delay * 1000)}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `${hiddenTranslate} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
