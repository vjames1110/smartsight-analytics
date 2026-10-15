import { useEffect, useRef, useState } from "react";

// Renders children at a fixed design width and scales them down to fit the
// container, so a full mock screen can be used as a card thumbnail.
function ScaledPreview({ baseWidth = 660, children }) {
  const outer = useRef(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = outer.current;
    if (!el) return undefined;

    const update = () => setScale(el.clientWidth / baseWidth);
    update();

    if (typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [baseWidth]);

  return (
    <div className="scaled-preview" ref={outer} aria-hidden="true">
      <div
        className="scaled-preview-inner"
        style={{ width: baseWidth, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}

export default ScaledPreview;
