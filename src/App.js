import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ScrollToHash from "./components/ScrollToHash";
import { WhatsAppIcon } from "./components/Icons";
import { SITE, whatsappLink, trackEvent } from "./config/site";

const Flagships = lazy(() => import("./components/Flagships"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const LeadForm = lazy(() => import("./components/LeadForm"));
const Privacy = lazy(() => import("./components/Privacy"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const PortfolioPrint = lazy(() => import("./components/PortfolioPrint"));

const isPrintMode =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("print") === "1";

function App() {
  if (isPrintMode) {
    document.body.classList.add("print-mode");
    return (
      <Suspense fallback={null}>
        <PortfolioPrint />
      </Suspense>
    );
  }

  const whatsappMessage =
    "Hi SmartSight Analytics, I want to discuss a website, app, ERP, software, or analytics project.";

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Suspense fallback={null}>
          <Flagships />
          <Services />
          <Portfolio />
          <HowItWorks />
          <LeadForm />
          <Privacy />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ScrollToHash />
      </Suspense>

      <a
        className="fixed-whatsapp"
        href={whatsappLink(whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
        aria-label={`WhatsApp: chat with ${SITE.name}`}
      >
        <span className="fixed-whatsapp-mark">
          <WhatsAppIcon />
        </span>
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
