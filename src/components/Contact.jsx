import "./Contact.css";

function Contact() {
  const whatsappMessage =
    "Hi, I would like to book a free consultation for my business.";

  return (
    <section id="contact" className="contact">
      <h2>Let’s Grow Your Business</h2>
      <p className="contact-subtitle">
        Get in touch for analytics, dashboards & growth insights
      </p>

      <div className="contact-table">
        <div className="contact-row">
          <span className="label">📍 Location: </span>
          <span className="value">Bilaspur, India</span>
        </div>

        <div className="contact-row">
          <span className="label">📞 Phone: </span>
          <span className="value">+91 8374220978</span>
        </div>

        <div className="contact-row">
          <span className="label">📧 Email: </span>
          <span className="value">smartsight.analytics@gmail.com</span>
        </div>
      </div>

      <a
        href={`https://wa.me/918374220978?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className="contact-btn">Book Free Consultation</button>
      </a>
    </section>
  );
}

export default Contact;
