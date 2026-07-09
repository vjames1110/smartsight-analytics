import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Audit from "./components/Audit";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import LeadForm from "./components/LeadForm";

function App() {
  const whatsappMessage =
    "Hi SmartSight Analytics, I want to discuss a website, app, ERP, software, or analytics project.";

  return (
    <>
      <Header />
      <Banner />
      <LeadForm />
      <Audit />
      <HowItWorks />
      <Services />
      <Portfolio />
      <Privacy />
      <Contact />
      <Footer />

      <a
        className="fixed-whatsapp"
        href={`https://wa.me/918374220978?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SmartSight Analytics on WhatsApp"
      >
        <span className="fixed-whatsapp-mark">WA</span>
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
