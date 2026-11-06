"use client";
import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true
    });
    window.lenis = lenis;

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return null;
}