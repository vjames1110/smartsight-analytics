import "./Banner.css";

function Banner() {
  const whatsappMessage = `
Hi,
I would like to discuss a project with SmartSight Analytics.

Project Type:
Business Type:
Timeline:
`;

  return (
    <section className="banner">
      <div className="banner-content">
        <p className="banner-eyebrow">Premium IT services for modern businesses</p>
        <h1>SmartSight Analytics</h1>
        <p className="banner-copy">
          We build websites, web apps, mobile apps, ERP systems, custom software,
          dashboards, and automation tools that help businesses operate smarter.
        </p>
        <div className="banner-actions">
          <a
            href={`https://wa.me/918374220978?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="banner-primary"
          >
            Get Free Consultation
          </a>

          <a href="#services" className="banner-secondary">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
