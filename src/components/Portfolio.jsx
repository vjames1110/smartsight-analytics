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
    }, 250);
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2>Sample Dashboards</h2>
      <p className="portfolio-subtitle">
        Explore real-world dashboards built for businesses
      </p>

      {/* TABS */}
      <div className="dashboard-tabs">
        {Object.keys(dashboards).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* DASHBOARD VIEW */}
      <div className={`dashboard-view ${animate ? "fade-out" : "fade-in"}`}>
        <iframe
          src={dashboards[activeTab]}
          title={`${activeTab} Dashboard`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* CUSTOM NOTE */}
<div className="custom-note">
  <p>
    ✔ And many more dashboards can be created as per your business requirements
  </p>

  <a
    href="https://wa.me/918374220978?text=Hi%20I%20want%20a%20custom%20business%20dashboard"
    target="_blank"
    rel="noreferrer"
    className="custom-btn"
  >
    Get a Custom Dashboard
  </a>
</div>

    </section>
  );
}

export default Portfolio;
