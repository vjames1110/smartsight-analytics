import "./MockScreen.css";
import { toneOf, themeVars } from "./tones";


const W = 360;
const H = 130;
const PAD = 18;

function Grid() {
  return [0.25, 0.5, 0.75, 1].map((t) => (
    <line
      key={t}
      x1={PAD}
      x2={W - PAD}
      y1={H - H * t}
      y2={H - H * t}
      className="mock-grid"
    />
  ));
}

function BarChart({ chart }) {
  const max = Math.max(...chart.series.flatMap((s) => s.values)) * 1.1;
  const groupW = (W - PAD * 2) / chart.labels.length;
  const barW = Math.min(18, (groupW - 8) / chart.series.length);

  return (
    <svg
      className="mock-chart-svg"
      viewBox={`0 0 ${W} ${H + 18}`}
      role="img"
      aria-label={chart.title}
    >
      <Grid />
      {chart.labels.map((label, i) => {
        const groupX =
          PAD + groupW * i + (groupW - barW * chart.series.length) / 2;
        return (
          <g key={label}>
            {chart.series.map((s, j) => {
              const h = (s.values[i] / max) * H;
              return (
                <rect
                  key={s.name}
                  x={groupX + j * barW}
                  y={H - h}
                  width={barW - 2}
                  height={h}
                  rx="2"
                  className={`mock-bar mock-bar-${j}`}
                />
              );
            })}
            <text
              x={PAD + groupW * i + groupW / 2}
              y={H + 13}
              textAnchor="middle"
              className="mock-axis"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function LineChart({ chart }) {
  const values = chart.series[0].values;
  const max = Math.max(...values) * 1.1;
  const step = (W - PAD * 2) / (values.length - 1);
  const points = values.map((v, i) => [PAD + step * i, H - (v / max) * H]);
  const line = points.map((p) => p.join(",")).join(" ");
  const area = `${PAD},${H} ${line} ${PAD + step * (values.length - 1)},${H}`;

  return (
    <svg
      className="mock-chart-svg"
      viewBox={`0 0 ${W} ${H + 18}`}
      role="img"
      aria-label={chart.title}
    >
      <Grid />
      <polygon points={area} className="mock-area" />
      <polyline points={line} className="mock-line" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" className="mock-dot" />
      ))}
      {chart.labels.map((label, i) => (
        <text
          key={label}
          x={PAD + step * i}
          y={H + 13}
          textAnchor="middle"
          className="mock-axis"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

// Horizontal progress bars, values are percentages
function ProgressChart({ chart }) {
  const values = chart.series[0].values;
  return (
    <div className="mock-progress" role="img" aria-label={chart.title}>
      {chart.labels.map((label, i) => (
        <div className="mock-progress-row" key={label}>
          <span>{label}</span>
          <div className="mock-progress-track">
            <div style={{ width: `${values[i]}%` }}></div>
          </div>
          <b>{values[i]}%</b>
        </div>
      ))}
    </div>
  );
}

// Signed bars around a zero line: gold above (excess), red below (short)
function VarianceChart({ chart }) {
  const values = chart.series[0].values;
  const maxAbs = Math.max(...values.map(Math.abs)) * 1.15 || 1;
  const mid = H / 2;
  const groupW = (W - PAD * 2) / chart.labels.length;
  const barW = Math.min(26, groupW - 10);

  return (
    <svg
      className="mock-chart-svg"
      viewBox={`0 0 ${W} ${H + 18}`}
      role="img"
      aria-label={chart.title}
    >
      <line x1={PAD} x2={W - PAD} y1={mid} y2={mid} className="mock-zero" />
      {chart.labels.map((label, i) => {
        const v = values[i];
        const h = (Math.abs(v) / maxAbs) * mid;
        return (
          <g key={label}>
            <rect
              x={PAD + groupW * i + (groupW - barW) / 2}
              y={v >= 0 ? mid - h : mid}
              width={barW}
              height={Math.max(h, 1.5)}
              rx="2"
              className={v >= 0 ? "mock-bar-pos" : "mock-bar-neg"}
            />
            <text
              x={PAD + groupW * i + groupW / 2}
              y={H + 13}
              textAnchor="middle"
              className="mock-axis"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Chart({ chart }) {
  if (chart.type === "line") return <LineChart chart={chart} />;
  if (chart.type === "progress") return <ProgressChart chart={chart} />;
  if (chart.type === "variance") return <VarianceChart chart={chart} />;
  return <BarChart chart={chart} />;
}

// Dummy-data product screen. Fluid width so it works on cards, modals and print.
function MockScreen({ product, screen }) {
  const { chart, table } = screen;

  return (
    <div
      className={`mock v-${product.variant || "sidebar"}`}
      style={themeVars(product.theme)}
    >
      <div className="mock-bar-top">
        <span></span>
        <span></span>
        <span></span>
        <b>
          {product.name} · {screen.name}
        </b>
      </div>

      <div className="mock-body">
        <ul className="mock-nav">
          {product.modules.slice(0, 8).map((m) => (
            <li key={m} className={m === screen.active ? "active" : ""}>
              {m}
            </li>
          ))}
        </ul>

        <div className="mock-main">
          <div className="mock-kpis">
            {screen.kpis.map((k) => (
              <div className="mock-kpi" key={k.label}>
                <small>{k.label}</small>
                <strong>{k.value}</strong>
              </div>
            ))}
          </div>

          <div className="mock-panels">
            <div className="mock-panel">
              <h4>{chart.title}</h4>
              <Chart chart={chart} />
              {chart.type === "variance" && (
                <div className="mock-legend">
                  <span>
                    <i className="mock-bar-pos"></i>Excess
                  </span>
                  <span>
                    <i className="mock-bar-neg"></i>Short
                  </span>
                </div>
              )}
              {chart.series.length > 1 && chart.type !== "line" && (
                <div className="mock-legend">
                  {chart.series.map((s, j) => (
                    <span key={s.name}>
                      <i className={`mock-bar-${j}`}></i>
                      {s.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mock-panel">
              <h4>{table.title}</h4>
              <table>
                <thead>
                  <tr>
                    {table.cols.map((c) => (
                      <th key={c}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i}>
                          {i === table.pillCol ? (
                            <span
                              className={`mock-pill ${
                                toneOf(cell)
                              }`}
                            >
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockScreen;
