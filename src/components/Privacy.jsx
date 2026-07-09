import "./Privacy.css";

function Privacy() {
  const policies = [
    {
      title: "Confidential Data Handling",
      description:
        "Client files, requirements, credentials, and project data are handled as confidential business information.",
    },
    {
      title: "Limited Usage",
      description:
        "Your data is used only for analysis, development, reporting, testing, or support activities related to your project.",
    },
    {
      title: "Access Control",
      description:
        "Project access is limited to authorized contributors and can be governed by NDA or specific client terms.",
    },
    {
      title: "Secure Handover",
      description:
        "Source files, dashboards, credentials, and documentation are shared through agreed and controlled channels.",
    },
  ];

  return (
    <section className="privacy" id="privacy">
      <div className="section-heading">
        <p className="section-kicker dark">Privacy</p>
        <h2>Data Security and Project Confidentiality</h2>
        <p>
          We treat every business process, dataset, and software requirement
          with the privacy discipline expected from a professional IT partner.
        </p>
      </div>

      <div className="privacy-table">
        {policies.map((policy) => (
          <div className="privacy-cell" key={policy.title}>
            <span></span>
            <h3>{policy.title}</h3>
            <p>{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Privacy;
