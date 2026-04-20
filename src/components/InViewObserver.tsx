"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement IntersectionObserver.
 * Elements marked with `.in-view` fade up when they enter the viewport.
 * Without JS, they simply stay visible (no visibility lost).
 */
export default function InViewObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".in-view");
    if (nodes.length === 0) return;

    // Fallback for reduced motion: reveal everything immediately.
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
