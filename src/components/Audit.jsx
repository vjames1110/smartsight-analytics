import "./Audit.css";

function Audit() {
  return (
    <section className="audit" id="audit-details">
      <div className="section-heading">
        <p className="section-kicker dark">Free Audit Scope</p>
        <h2>What We Review Before Suggesting a Solution</h2>
        <p>
          We look at your business process, current tools, data flow, and growth
          bottlenecks before recommending a website, app, ERP, or software plan.
        </p>
      </div>

      <div className="audit-grid">
        <div className="audit-card">
          <span>01</span>
          <h3>Process & Workflow Check</h3>
          <p>
            We map your current operations and find where manual work, delays,
            and repeated tasks are slowing the business.
          </p>
        </div>

        <div className="audit-card">
          <span>02</span>
          <h3>Technology Gap Review</h3>
          <p>
            We identify where a website, web app, mobile app, ERP, or custom
            software can remove friction.
          </p>
        </div>

        <div className="audit-card">
          <span>03</span>
          <h3>Data & Reporting Readiness</h3>
          <p>
            We check how your business captures data and where dashboards or
            reports can support faster decisions.
          </p>
        </div>

        <div className="audit-card">
          <span>04</span>
          <h3>Practical Growth Roadmap</h3>
          <p>
            You receive clear next steps, priority features, and a realistic
            delivery path for your digital solution.
          </p>
        </div>
      </div>

      <div className="audit-output">
        <div>
          <h3>Audit Output Within 72 Hours</h3>
          <p>
            A concise recommendation covering the right solution type, must-have
            modules, possible automation, and project direction.
          </p>
        </div>
        <a
          href="https://wa.me/918374220978?text=Hi%20SmartSight%20Analytics,%0A%0AI%20want%20a%20Free%20Project%20Audit.%0A%0ABusiness%20Type:%20%0ARequirement:%20%0ACurrent%20Challenge:%20%0A%0APlease%20guide%20me%20on%20next%20steps."
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Proceed to Free Audit</button>
        </a>
      </div>
    </section>
  );
}

export default Audit;
