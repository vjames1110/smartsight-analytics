export const SITE = {
  name: "SmartSight Analytics",
  phones: [
    { display: "+91 8374220978", tel: "+918374220978" },
    { display: "+91 9926136474", tel: "+919926136474" },
  ],
  whatsappNumber: "918374220978",
  email: "smartsightanalytics@gmail.com",
  website: "smartsightanalytics.com",
  location: "Bilaspur, India",
};

// Public site address (the primary domain in Netlify). Used for share links.
export const SITE_URL = "https://smartsightanalytics.com";

export const phoneList = () => SITE.phones.map((p) => p.display).join(" / ");

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

// Sends a Google Analytics event (gtag is loaded in public/index.html).
export const trackEvent = (name, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};

export const PORTFOLIO_PDF = "/downloads/SmartSight-Portfolio.pdf";
