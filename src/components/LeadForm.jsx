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
      <h2>Get Free Business Audit</h2>
      <p>Share basic details & receive free insights</p>

      <div className="form-box">
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Business Type"
          onChange={(e) => setForm({ ...form, business: e.target.value })}
        />
        <textarea
          placeholder="What do you want to analyze?"
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
        ></textarea>

        <a
          href={`https://wa.me/918374220978?text=${encodeURIComponent(
            whatsappText
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          <button>Send via WhatsApp</button>
        </a>

        <p className="fallback">
          Prefer WhatsApp? This form opens WhatsApp directly.
        </p>
      </div>
    </section>
  );
}

export default LeadForm;
