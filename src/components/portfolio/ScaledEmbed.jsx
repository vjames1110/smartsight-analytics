import { useEffect, useRef, useState } from "react";

// Tableau dashboards reflow to the iframe size and clip figures when it is too
// small. This renders the iframe at a size where every figure fits, then
// scales it down to the modal width (never below minScale, below which the
// area scrolls sideways instead of becoming unreadable).
const DESIGN_WIDTH = 1400;
const DESIGN_HEIGHT = 900;
const MIN_SCALE = 0.55;

function ScaledEmbed({ src, title }) {
  const box = useRef(null);
  const [width, setWidth] = useState(DESIGN_WIDTH);

  useEffect(() => {
    const el = box.current;
    if (!el) return undefined;

    const update = () => setWidth(el.clientWidth);
    update();

    if (typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scale = Math.max(Math.min(1, width / DESIGN_WIDTH), MIN_SCALE);
  const frameWidth = width > DESIGN_WIDTH ? width : DESIGN_WIDTH;

  return (
    <div className="pm-embed-box" ref={box}>
      <div
        className="pm-embed-stage"
        style={{
          width: frameWidth * scale,
          height: DESIGN_HEIGHT * scale,
        }}
      >
        <iframe
          src={src}
          title={title}
          allowFullScreen
          style={{
            width: frameWidth,
            height: DESIGN_HEIGHT,
            transform: `scale(${scale})`,
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default ScaledEmbed;
