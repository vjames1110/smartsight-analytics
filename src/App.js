import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import LeadForm from "./components/LeadForm";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioPrint from "./components/PortfolioPrint";
import { WhatsAppIcon } from "./components/Icons";
import { SITE, whatsappLink, trackEvent } from "./config/site";

const isPrintMode =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("print") === "1";

function App() {
  if (isPrintMode) {
    document.body.classList.add("print-mode");
    return <PortfolioPrint />;
  }

  const whatsappMessage =
    "Hi SmartSight Analytics, I want to discuss a website, app, ERP, software, or analytics project.";

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Services />
        <Portfolio />
        <HowItWorks />
        <LeadForm />
        <Privacy />
        <Contact />
      </main>
      <Footer />

      <a
        className="fixed-whatsapp"
        href={whatsappLink(whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
        aria-label={`Chat with ${SITE.name} on WhatsApp`}
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
