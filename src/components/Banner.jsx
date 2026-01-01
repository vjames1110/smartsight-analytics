import "./Banner.css";

function Banner() {
    const whatsappMessage = `
Hi,
I would like to get a FREE Business Audit.

Business Type:
Industry:
Monthly Revenue (optional):
`;

  return (
    <section className="banner" id="audit">
      <h1>Grow Your Business with Data Analytics</h1>
      <p>Dashboards • Insights • Reports • Growth Strategies</p>

      <a
        href={`https://wa.me/918374220978?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <button>Get Free Business Audit</button>
      </a>
    </section>
  );
}

export default Banner;
