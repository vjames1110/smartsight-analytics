import { useState } from "react";
import "./LeadForm.css";
import { whatsappLink, trackEvent } from "../config/site";

const reviewPoints = [
  {
    title: "Process & workflow",
    text: "Where manual work, delays, and repeated tasks slow you down.",
  },
  {
    title: "Technology gaps",
    text: "Where a web app, mobile app, ERP, or custom software removes friction.",
  },
  {
    title: "Data & reporting",
    text: "How you capture data and where dashboards speed up decisions.",
  },
  {
    title: "Growth roadmap",
    text: "Priority features and a realistic delivery path.",
  },
];

function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    requirement: "",
  });

  const whatsappText = `Hi, my name is ${form.name}.
Business: ${form.business}.
Requirement: ${form.requirement}`;

  return (
    <section className="lead-form" id="audit">
      <div className="lead-copy">
        <p className="section-kicker">Free Audit</p>
        <h2>Get a Free Project & Business Audit</h2>
        <p>
          Share your idea, process problem, or current system challenge. We
          review it and recommend the right digital solution, with a concise
          written recommendation within 72 hours.
        </p>

        <ul className="lead-review">
          {reviewPoints.map((point) => (
            <li key={point.title}>
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </li>
          ))}
        </ul>

        <div className="lead-highlights">
          <span>No obligation</span>
          <span>WhatsApp response</span>
          <span>Practical next steps</span>
        </div>
      </div>

      <form
        className="form-box"
        onSubmit={(e) => {
          e.preventDefault();
          trackEvent("lead_submit", { method: "whatsapp" });
          window.open(whatsappLink(whatsappText), "_blank", "noopener");
        }}
      >
        <label htmlFor="lead-name" className="sr-only">
          Your name
        </label>
        <input
          id="lead-name"
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <label htmlFor="lead-business" className="sr-only">
          Business type
        </label>
        <input
          id="lead-business"
          type="text"
          placeholder="Business Type"
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
        />
        <label htmlFor="lead-requirement" className="sr-only">
          Your requirement
        </label>
        <textarea
          id="lead-requirement"
          placeholder="Website, app, ERP, software, dashboard, or automation requirement"
          required
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
        ></textarea>

        <button type="submit" className="btn btn-wa">
          Send via WhatsApp
        </button>

        <p className="fallback">Your message opens directly in WhatsApp.</p>
      </form>
    </section>
  );
}

export default LeadForm;
