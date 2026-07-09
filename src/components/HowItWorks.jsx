import { useState } from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      title: "Discovery Call",
      short: "We understand your business, users, goals, and pain points.",
      details:
        "We discuss your current process, target audience, required features, data sources, budget range, and timeline before defining the solution direction.",
      label: "01",
    },
    {
      title: "Solution Blueprint",
      short: "We convert the requirement into screens, modules, and workflow.",
      details:
        "You receive a practical plan covering feature scope, user roles, ERP modules, integrations, reporting needs, and delivery milestones.",
      label: "02",
    },
    {
      title: "Design & Development",
      short: "We build clean, responsive, business-ready digital products.",
      details:
        "Our delivery can include web apps, mobile apps, admin panels, ERP modules, dashboards, APIs, automations, and secure databases.",
      label: "03",
    },
    {
      title: "Testing & Launch",
      short: "We test flows, data, responsiveness, and production readiness.",
      details:
        "Before launch, we validate core workflows, forms, reports, mobile behavior, speed, access controls, and handover requirements.",
      label: "04",
    },
    {
      title: "Support & Improvements",
      short: "We help refine, maintain, and extend the solution after launch.",
      details:
        "Monthly support is available for improvements, reporting, bug fixes, training, dashboards, and new feature releases.",
      label: "05",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-heading">
        <p className="section-kicker dark">How It Works</p>
        <h2>From Idea to Working Digital Product</h2>
        <p>
          A clear delivery process for websites, apps, ERP systems, software,
          analytics dashboards, and business automation.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <button
            key={step.title}
            className={`step-card ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            type="button"
          >
            <span className="step-label">{step.label}</span>
            <h3>{step.title}</h3>
            <p className="short">{step.short}</p>
            {active === index && <p className="details">{step.details}</p>}
          </button>
        ))}
      </div>

      <a href="#services" className="audit-cta">
        View Service Capabilities
      </a>
    </section>
  );
}

export default HowItWorks;
