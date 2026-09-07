import { useEffect, useState } from "react";

/** Open/close state for the mobile nav drawer, auto-closing if the viewport grows back to desktop width. */
export function useMobileMenu(desktopBreakpoint = 940) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > desktopBreakpoint) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [desktopBreakpoint]);

  return {
    open,
    toggle: () => setOpen((v) => !v),
    close: () => setOpen(false),
  };
}
