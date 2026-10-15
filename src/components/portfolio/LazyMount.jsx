import { useEffect, useRef, useState } from "react";

// Renders children only once the block is near the viewport, so the many
// product visuals do not all get built on first load.
function LazyMount({ children, rootMargin = "300px" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (visible || !ref.current) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} className="lazy-mount">
      {visible ? children : null}
    </div>
  );
}

export default LazyMount;
