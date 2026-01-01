import "./Audit.css";

function Audit() {
  return (
    <section className="audit" id="audit">
      <h2>Free Business Audit – What You’ll Get</h2>

      <div className="audit-grid">
        <div className="audit-card">
          <h3>📊 Sales & Performance Check</h3>
          <p>
            We analyze your recent sales data to identify trends, best days,
            and underperforming areas.
          </p>
        </div>

        <div className="audit-card">
          <h3>💰 Profit & Expense Review</h3>
          <p>
            We identify high expenses and estimate profit gaps where money
            can be saved.
          </p>
        </div>

        <div className="audit-card">
          <h3>🧠 Product / Service Insights</h3>
          <p>
            Find out which products or services bring most revenue and which
            ones reduce profit.
          </p>
        </div>

        <div className="audit-card">
          <h3>🚀 Growth Recommendations</h3>
          <p>
            Get 3–5 clear, practical suggestions to improve sales and reduce
            losses.
          </p>
        </div>
      </div>

      <div className="audit-output">
        <h3>🎁 Audit Output (Within 72 Hours)</h3>
        <ul>
          <li>✔ Simple dashboard screenshot</li>
          <li>✔ 2–3 page PDF summary</li>
          <li>✔ Clear improvement & growth ideas</li>
        </ul>

        <a
  href="https://wa.me/918374220978?text=Hi%20SmartSight%20Analytics,%0A%0AI%20want%20a%20Free%20Business%20Audit.%0A%0ABusiness%20Type:%20%0ALocation:%20%0AData%20Available:%20Last%201%20month%20sales/expenses.%0A%0APlease%20guide%20me%20on%20next%20steps."
  target="_blank"
  rel="noreferrer"
>
  <button>Proceed to Free Audit</button>
  <p style={{ marginTop: "15px", fontSize: "14px", color: "#f2f2f2" }}>
  Clicking this will open WhatsApp with a ready message.
  No obligation. No payment required.
</p>

</a>

      </div>
    </section>
  );
}

export default Audit;
