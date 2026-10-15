import { useEffect } from "react";

// Locks page scroll and closes on Escape while `active` is true.
export default function useModalBehavior(active, onClose) {
  useEffect(() => {
    if (!active) return undefined;

    document.body.classList.add("scroll-locked");
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [active, onClose]);
}
