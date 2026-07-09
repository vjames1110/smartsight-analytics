import { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const dashboards = {
    Retail:
      "https://public.tableau.com/views/RetailsSalesAnalytics/RetailsDashboard?:showVizHome=no&:embed=true",
    Restaurant:
      "https://public.tableau.com/views/RestaurantSalesAnalysis_17670989933760/RestaurantDB?:showVizHome=no&:embed=true",
    Logistics:
      "https://public.tableau.com/views/Logistics_17671662754140/LogisticsDB?:showVizHome=no&:embed=true",
  };

  const [activeTab, setActiveTab] = useState("Retail");
  const [animate, setAnimate] = useState(false);

  const handleTabChange = (tab) => {
    setAnimate(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimate(false);
    }, 200);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-heading portfolio-heading">
        <p className="section-kicker dark">Portfolio</p>
        <h2>Dashboards, Systems, and Digital Experiences</h2>
        <p>
          Explore sample analytics dashboards. Similar reporting can be added
          inside custom web apps, ERP modules, and business software.
        </p>
      </div>

      <div className="dashboard-tabs" role="tablist" aria-label="Dashboard samples">
        {Object.keys(dashboards).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={`dashboard-view ${animate ? "fade-out" : "fade-in"}`}>
        <iframe
          src={dashboards[activeTab]}
          title={`${activeTab} Dashboard`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="custom-note">
        <p>
          Custom dashboards, admin panels, ERP reports, and performance views can
          be created around your exact business data.
        </p>

        <a
          href="https://wa.me/918374220978?text=Hi%20I%20want%20a%20custom%20dashboard%20or%20software%20solution"
          target="_blank"
          rel="noreferrer"
          className="custom-btn"
        >
          Request a Custom Build
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
