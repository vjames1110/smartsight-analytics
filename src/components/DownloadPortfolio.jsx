import { PORTFOLIO_PDF, trackEvent } from "../config/site";
import { DownloadIcon } from "./Icons";

function DownloadPortfolio({ className = "btn btn-gold", location, children }) {
  return (
    <a
      className={className}
      href={PORTFOLIO_PDF}
      download="SmartSight-Portfolio.pdf"
      onClick={() => trackEvent("portfolio_download", { location })}
    >
      <DownloadIcon width={18} height={18} />
      {children || "Download Portfolio (PDF)"}
    </a>
  );
}

export default DownloadPortfolio;
