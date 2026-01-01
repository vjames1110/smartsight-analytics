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
  return (
    <>
      <Header />
      <Banner />
      <LeadForm />
      <Audit />

      {/* HOW IT WORKS FIRST */}
      <HowItWorks />

      {/* THEN SERVICES */}
      <Services />

      {/* THEN PORTFOLIO */}
      <Portfolio />
      <Privacy />

      {/* LAST CONTACT */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
