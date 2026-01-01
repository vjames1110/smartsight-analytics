import "./Privacy.css";

function Privacy() {
  const policies = [
    { title: "Data Confidentiality", description: "All client data is 100% secure and confidential." },
    { title: "Usage", description: "Data is analyzed only for generating reports and dashboards." },
    { title: "Access Control", description: "Only authorized team members can access your data." },
    { title: "Retention", description: "Data is retained as per agreement and then securely deleted." },
  ];

  return (
    <section className="privacy" id="privacy">
      <h2>Privacy & Data Security</h2>
      <p className="privacy-subtitle">Your data is safe with us. Here’s how we handle it:</p>

      <div className="privacy-table">
        {policies.map((policy, i) => (
          <div className="privacy-cell" key={i}>
            <h3>{policy.title}</h3>
            <p>{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Privacy;
