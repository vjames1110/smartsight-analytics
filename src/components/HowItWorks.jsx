import { useState } from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      title: "You Share Your Data",
      short: "Securely share your business data with us.",
      details:
        "You can share Excel, CSV, Google Sheets, POS exports, or system reports. We guide you on exactly what data is required — nothing extra.",
      icon: "📁",
    },
    {
      title: "Data Privacy & Confidentiality",
      short: "Your data is 100% confidential and secure.",
      details:
        "Your data is never shared with third parties. Files are used strictly for analysis and deleted after project completion (unless monthly support is active). NDA available on request.",
      icon: "🔒",
    },
    {
      title: "Data Cleaning & Analysis",
      short: "We clean, analyze, and structure your data.",
      details:
        "We remove errors, duplicates, and inconsistencies before analysis. Industry best practices are followed to ensure accurate insights.",
      icon: "📊",
    },
    {
      title: "Insights & Dashboards",
      short: "You receive easy-to-understand outputs.",
      details:
        "You get interactive dashboards, summary reports, and actionable insights tailored to your business goals — not generic charts.",
      icon: "📈",
    },
    {
      title: "Delivery & Support",
      short: "Clear explanation & post-delivery support.",
      details:
        "We explain everything in simple language and offer WhatsApp/email support for queries. Monthly support available if needed.",
      icon: "🤝",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works & Your Data Safety</h2>
      <p className="subtitle">
        Simple process. Complete transparency. Zero data misuse.
      </p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-card ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p className="short">{step.short}</p>

            {active === index && (
              <p className="details">{step.details}</p>
            )}
          </div>
        ))}
      </div>
      <a href="#audit" className="audit-cta">
  <button>Get Free Business Audit</button>
</a>

    </section>
  );
}

export default HowItWorks;
