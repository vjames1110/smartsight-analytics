import "./PhoneMock.css";
import { toneOf, themeVars } from "./tones";

const BASE_W = 210;
const BASE_H = 420;

// Mobile app screen drawn with sample data. Designed at 210x420 and scaled.
function PhoneMock({ product, screen, scale = 1 }) {
  return (
    <div
      className="phone-box"
      style={{ width: BASE_W * scale, height: BASE_H * scale }}
    >
      <div
        className="phone"
        style={{
          ...themeVars(product.theme),
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
        }}
      >
        <div className="phone-notch"></div>
        <div className="phone-status">
          <span>9:41</span>
          <span>●●● ▮</span>
        </div>

        <div className="phone-head">
          <small>{product.mobile.app}</small>
          <strong>{screen.title}</strong>
        </div>

        <div className="phone-body">
          <div className="phone-kpis">
            {screen.kpis.map((k) => (
              <div key={k.label}>
                <small>{k.label}</small>
                <strong>{k.value}</strong>
              </div>
            ))}
          </div>

          <ul className="phone-list">
            {screen.items.map((item) => (
              <li key={item.title}>
                <div>
                  <b>{item.title}</b>
                  <small>{item.sub}</small>
                </div>
                {item.tag && (
                  <span className={`mock-pill ${toneOf(item.tag)}`}>
                    {item.tag}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {screen.action && <div className="phone-fab">{screen.action}</div>}

        <div className="phone-tabs">
          {screen.tabs.map((t, i) => (
            <span key={t} className={i === (screen.activeTab || 0) ? "active" : ""}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhoneMock;
