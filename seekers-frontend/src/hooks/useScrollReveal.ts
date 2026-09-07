import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Fades/slides any descendant of `containerRef` carrying the `.reveal`
 * class into view the first time it enters the viewport. Combine with the
 * `.reveal`, `.reveal-left` / `.reveal-right` classes defined in index.css.
 */
export function useScrollReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [containerRef]);
}
