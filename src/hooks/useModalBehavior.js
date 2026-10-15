import { useEffect } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

// While `active`: locks page scroll, closes on Escape, moves focus into the
// container, keeps Tab inside it, and gives focus back to the opener on close.
export default function useModalBehavior(active, onClose, containerRef) {
  useEffect(() => {
    if (!active) return undefined;

    const opener = document.activeElement;
    document.body.classList.add("scroll-locked");
    containerRef?.current?.focus({ preventScroll: true });

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      const box = containerRef?.current;
      if (e.key !== "Tab" || !box) return;

      const items = [...box.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && (document.activeElement === first || document.activeElement === box)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKey);
      if (opener && typeof opener.focus === "function") opener.focus({ preventScroll: true });
    };
  }, [active, onClose, containerRef]);
}
