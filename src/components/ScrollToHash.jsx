import { useEffect } from "react";

// Sections load after the hero, so a link like /#contact needs to scroll once
// they exist. Product deep links (#product-...) are handled by the portfolio.
function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || id.startsWith("product-")) return;
    document.getElementById(id)?.scrollIntoView();
  }, []);

  return null;
}

export default ScrollToHash;
