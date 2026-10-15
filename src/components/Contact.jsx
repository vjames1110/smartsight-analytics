import "./Contact.css";
import { SITE, whatsappLink, trackEvent } from "../config/site";

function Contact() {
  const whatsappMessage =
    "Hi, I would like to book a free consultation for my website, app, ERP, software, or analytics requirement.";

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <p className="section-kicker">Contact</p>
        <h2>Let Us Build Your Next Digital System</h2>
        <p className="contact-subtitle">
          Talk to SmartSight Analytics for web app development, mobile app
          development, ERP development, custom software, dashboards, and ongoing
          technology support.
        </p>

        <div className="contact-table">
          <div className="contact-row">
            <span className="label">Location</span>
            <span className="value">{SITE.location}</span>
          </div>

          <div className="contact-row">
            <span className="label">Phone</span>
            <a className="value" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="contact-row">
            <span className="label">Email</span>
            <a className="value" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
        </div>

        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
          onClick={() => trackEvent("whatsapp_click", { location: "contact" })}
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}

export default Contact;
