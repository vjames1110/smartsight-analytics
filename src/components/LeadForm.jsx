import { useState } from "react";
import "./LeadForm.css";

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
        <p className="section-kicker">Start with clarity</p>
        <h2>Get a Free Project & Business Audit</h2>
        <p>
          Share your idea, process problem, or current system challenge. We will
          review it and suggest the right digital solution path.
        </p>
        <div className="lead-highlights">
          <span>No obligation</span>
          <span>WhatsApp response</span>
          <span>Practical next steps</span>
        </div>
      </div>

      <div className="form-box">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Business Type"
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
        />
        <textarea
          placeholder="Website, app, ERP, software, dashboard, or automation requirement"
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
        ></textarea>

        <a
          href={`https://wa.me/918374220978?text=${encodeURIComponent(
            whatsappText
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Send via WhatsApp</button>
        </a>

        <p className="fallback">Your message opens directly in WhatsApp.</p>
      </div>
    </section>
  );
}

export default LeadForm;
