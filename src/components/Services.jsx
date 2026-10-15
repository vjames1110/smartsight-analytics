import { useState, useEffect, useRef, useCallback } from "react";
import "./Services.css";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";
import useModalBehavior from "../hooks/useModalBehavior";
import { whatsappLink, trackEvent } from "../config/site";

const services = [
  {
    title: "Web App Development",
    description:
      "Responsive portals, dashboards, booking systems, admin panels, and client-facing web applications.",
    details: [
      "Custom UI and user journeys",
      "Secure login and role management",
      "Admin dashboards and reporting",
      "API and payment gateway integrations",
    ],
    price: "Custom quote",
    image: "/images/website-development.webp",
    comparison: "Best for businesses that need browser-based software.",
    whatsappText: "Hi, I am interested in Web App Development.",
    category: "Web",
  },
  {
    title: "Mobile App Development",
    description:
      "Android and mobile-first app solutions for customers, employees, field teams, and operations.",
    details: [
      "Customer and staff app flows",
      "Mobile dashboards and forms",
      "Notifications and user accounts",
      "Backend integration and deployment support",
    ],
    price: "Custom quote",
    image: "/images/app-development.webp",
    comparison: "Best for businesses that need access on the move.",
    whatsappText: "Hi, I am interested in Mobile App Development.",
    category: "Mobile",
  },
  {
    title: "ERP Development",
    description:
      "Centralized ERP systems for sales, inventory, billing, purchases, HR, finance, and operations.",
    details: [
      "Module-wise ERP planning",
      "Inventory, sales, and billing workflows",
      "User roles and approvals",
      "Reports for management decisions",
    ],
    price: "Custom quote",
    image: "/images/erp-development.webp",
    comparison: "Best for companies ready to unify daily operations.",
    whatsappText: "Hi, I want to discuss ERP Development.",
    category: "ERP",
  },
  {
    title: "Customized ERP Solutions",
    description:
      "Tailored ERP modules built around your exact business process instead of forcing generic software.",
    details: [
      "Requirement mapping and module design",
      "Custom approvals and workflows",
      "Branch, team, and department views",
      "Migration from Excel or existing tools",
    ],
    price: "Custom quote",
    image: "/images/insights-report.webp",
    comparison: "Best for businesses with unique process requirements.",
    whatsappText: "Hi, I need a Customized ERP Solution.",
    category: "ERP",
  },
  {
    title: "Software Development",
    description:
      "Reliable custom software for internal operations, automation, reporting, and business management.",
    details: [
      "Custom business logic",
      "Database design",
      "Workflow automation",
      "Testing, launch, and support",
    ],
    price: "Custom quote",
    image: "/images/interactive-dashboard.webp",
    comparison: "Best when off-the-shelf tools do not fit your process.",
    whatsappText: "Hi, I am interested in Custom Software Development.",
    category: "Software",
  },
  {
    title: "Business Analytics & Dashboards",
    description:
      "Interactive dashboards, reports, and insights that turn business data into clear decisions.",
    details: [
      "Sales, expense, and profit analytics",
      "Power BI or Tableau style dashboards",
      "Monthly reports and KPI tracking",
      "Growth recommendations from data",
    ],
    price: "Starting at Rs. 2,999",
    image: "/images/performance-dashboard.webp",
    comparison: "Best for data-driven visibility and performance tracking.",
    whatsappText: "Hi, I am interested in Business Analytics and Dashboards.",
    category: "Analytics",
  },
  {
    title: "Industry-Specific Solutions",
    description:
      "Ready-to-adapt products for construction, healthcare, finance, community, education, logistics and more, customized to your process.",
    details: [
      "Proven modules you can adapt, not start from zero",
      "Built around your workflow and data",
      "Live dashboards and sample screens to review",
      "Downloadable portfolio for your team",
    ],
    price: "Custom quote",
    image: "/images/industry-solutions.svg",
    comparison: "Best for businesses that want industry know-how built in.",
    whatsappText: "Hi, I want an industry-specific solution for my business.",
    category: "Industry",
    link: { href: "#portfolio", label: "View Portfolio" },
  },
];

function Services() {
  const [index, setIndex] = useState(null);
  const touchStartX = useRef(0);

  const prev = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === null
        ? 0
        : (prevIndex - 1 + services.length) % services.length
    );
  }, []);

  const next = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === null ? 0 : (prevIndex + 1) % services.length
    );
  }, []);

  const close = useCallback(() => setIndex(null), []);
  useModalBehavior(index !== null, close);

  useEffect(() => {
    const handleKey = (e) => {
      if (index === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, next, prev]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="services" id="services">
      <div className="section-heading services-heading">
        <p className="section-kicker dark">Our Services</p>
        <h2>Premium IT Services for Growing Businesses</h2>
        <p>
          From customer-facing websites to internal ERP systems, SmartSight
          Analytics designs and builds practical digital solutions around your
          business workflow.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <article className="service-card" key={service.title}>
            <div className="service-image-wrap">
              <img src={service.image} alt="" className="service-image" />
              <span className="service-category">{service.category}</span>
            </div>
            <div className="service-card-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.details.slice(0, 3).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <button type="button" onClick={() => setIndex(i)}>
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {index !== null && (
        <div className="modal-overlay" onClick={close}>
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-label={services[index].title}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              className="service-close-btn icon-btn"
              onClick={close}
              aria-label="Close service details"
              type="button"
            >
              <CloseIcon />
            </button>
            <button
              className="nav-arrow icon-btn left"
              onClick={prev}
              aria-label="Previous service"
              type="button"
            >
              <ChevronLeftIcon />
            </button>
            <button
              className="nav-arrow icon-btn right"
              onClick={next}
              aria-label="Next service"
              type="button"
            >
              <ChevronRightIcon />
            </button>

            <div className="modal-media">
              <img
                src={services[index].image}
                alt={services[index].title}
                className="modal-image"
              />
            </div>

            <span className="modal-category">{services[index].category}</span>
            <h3>{services[index].title}</h3>
            <p>{services[index].description}</p>

            <ul className="modal-list">
              {services[index].details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="comparison-box">
              <strong>Best Fit:</strong> {services[index].comparison}
            </div>

            <div className="modal-footer">
              <p className="price">{services[index].price}</p>
              {services[index].link && (
                <a
                  className="btn btn-dark"
                  href={services[index].link.href}
                  onClick={close}
                >
                  {services[index].link.label}
                </a>
              )}
              <a
                className="btn btn-wa"
                href={whatsappLink(services[index].whatsappText)}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    location: "service_modal",
                    service: services[index].title,
                  })
                }
              >
                Discuss This Service
              </a>
            </div>

            <div className="dots" aria-label="Service carousel progress">
              {services.map((service, i) => (
                <button
                  key={service.title}
                  className={i === index ? "dot active" : "dot"}
                  onClick={() => setIndex(i)}
                  aria-label={`View ${service.title}`}
                  type="button"
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
