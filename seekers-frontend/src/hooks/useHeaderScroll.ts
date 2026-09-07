import { useEffect, useState } from "react";

/** Returns true once the page has scrolled past `threshold` px, for a header shadow / elevation effect. */
export function useHeaderScroll(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
