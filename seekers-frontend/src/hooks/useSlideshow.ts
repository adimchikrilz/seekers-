import { useEffect, useState } from "react";
import type { Slide } from "../types/landing";

/**
 * Drives an auto-advancing slideshow with manual next/prev/goto controls.
 * The autoplay timer resets whenever `current` changes, so a manual
 * navigation click gives the user a full interval before it advances again.
 */
export function useSlideshow(slides: Slide[], autoplayMs = 5500) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, autoplayMs);
    return () => clearInterval(timer);
  }, [current, slides.length, autoplayMs]);

  const goToSlide = (i: number) => setCurrent(i);
  const moveSlide = (delta: number) =>
    setCurrent((c) => (c + delta + slides.length) % slides.length);

  return { current, goToSlide, moveSlide };
}
