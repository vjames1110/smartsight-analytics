export const SITE = {
  name: "SmartSight Analytics",
  phoneDisplay: "+91 8374220978",
  phoneTel: "+918374220978",
  whatsappNumber: "918374220978",
  email: "smartsightanalytics@gmail.com",
  location: "Bilaspur, India",
};

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

// Sends a Google Analytics event (gtag is loaded in public/index.html).
export const trackEvent = (name, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};

export const PORTFOLIO_PDF = "/downloads/SmartSight-Portfolio.pdf";
