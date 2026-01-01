import { useState, useEffect, useRef, useCallback } from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Business Performance Analytics",
      description: "Complete analysis of sales, expenses, profit trends, and gaps.",
      details: [
        "Sales & revenue trends",
        "Expense & profit analysis",
        "Best & worst products",
        "Monthly summary",
      ],
      price: "₹2,999+",
      image: "/images/performance-dashboard.jpg",
      comparison: "Best for understanding overall business health",
      whatsappText:
        "Hi, I am interested in Business Performance Analytics service.",
    },
    {
      title: "Interactive Business Dashboards",
      description: "All KPIs visible in one interactive dashboard.",
      details: [
        "Sales dashboard",
        "Profit dashboard",
        "Product performance",
        "Monthly comparison",
      ],
      price: "₹4,999+",
      image: "/images/interactive-dashboard.jpg",
      comparison: "Best for daily monitoring & decision making",
      whatsappText:
        "Hi, I want Interactive Business Dashboards.",
    },
    {
      title: "Insights & Growth Recommendations",
      description: "Actionable insights to increase sales and reduce cost.",
      details: [
        "Growth opportunities",
        "Cost reduction ideas",
        "Action plans",
        "Risk identification",
      ],
      price: "₹2,499+",
      image: "/images/insights-report.jpg",
      comparison: "Best for strategy & planning",
      whatsappText:
        "Hi, I am interested in Insights & Growth Recommendations.",
    },
    {
      title: "Monthly Analytics Support",
      description: "Ongoing analytics & reporting support.",
      details: [
        "Monthly dashboards",
        "Reports",
        "Data cleanup",
        "WhatsApp support",
      ],
      price: "₹4,999/month",
      image: "/images/monthly-support.jpg",
      comparison: "Best for growing businesses",
      whatsappText:
        "Hi, I want Monthly Analytics Support.",
    },
  ];

  const [index, setIndex] = useState(null);
  const touchStartX = useRef(0);

const prev = useCallback(() => {
  setIndex((prevIndex) =>
    prevIndex === null
      ? 0
      : (prevIndex - 1 + services.length) % services.length
  );
}, [services.length]);
const next = useCallback(() => {
  setIndex((prevIndex) =>
    prevIndex === null
      ? 0
      : (prevIndex + 1) % services.length
  );
}, [services.length]);

  /* Keyboard Support */
  useEffect(() => {
    const handleKey = (e) => {
      if (index === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, next, prev]);

  /* Swipe Support */
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <button onClick={() => setIndex(i)}>View Details</button>
          </div>
        ))}
      </div>

      {index !== null && (
        <div className="modal-overlay"
        onClick={() => setIndex(null)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button className="close-btn" onClick={() => setIndex(null)}>✖</button>
            <button className="nav-arrow left" onClick={prev}>‹</button>
            <button className="nav-arrow right" onClick={next}>›</button>

            <h3>{services[index].title}</h3>
            <p>{services[index].description}</p>

            <img
              src={services[index].image}
              alt={services[index].title}
              className="modal-image"
            />

            <ul>
              {services[index].details.map((d, i) => (
                <li key={i}>✔ {d}</li>
              ))}
            </ul>

            {/* COMPARISON */}
            <div className="comparison-box">
              <strong>Best Use:</strong> {services[index].comparison}
            </div>

            <p className="price">{services[index].price}</p>

            <a
              href={`https://wa.me/918374220978?text=${encodeURIComponent(
                services[index].whatsappText
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="whatsapp-btn">Get This Service</button>
            </a>

            {/* PROGRESS DOTS */}
            <div className="dots">
              {services.map((_, i) => (
                <span
                  key={i}
                  className={i === index ? "dot active" : "dot"}
                  onClick={() => setIndex(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
