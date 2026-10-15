// Shared status-pill tones for mock web and mobile screens.
export const PILL_TONES = {
  Paid: "good",
  Active: "good",
  Done: "good",
  Delivered: "good",
  Approved: "good",
  Matched: "good",
  Booked: "good",
  Available: "good",
  Served: "good",
  Resolved: "good",
  Won: "good",
  OK: "good",
  "On track": "good",
  Discharged: "good",
  Due: "warn",
  Pending: "warn",
  Low: "warn",
  Waiting: "warn",
  Variance: "warn",
  Visited: "warn",
  Held: "warn",
  Excess: "warn",
  Evaluating: "warn",
  "In maintenance": "warn",
  Overdue: "bad",
  Delayed: "bad",
  Short: "bad",
  Escalated: "bad",
  Critical: "bad",
  Expiring: "bad",
  Lost: "bad",
  Admitted: "info",
  New: "info",
  Submitted: "info",
  "In progress": "info",
  "In consult": "info",
  Draft: "muted",
  Closed: "muted",
  Idle: "muted",
};

export const toneOf = (label) => PILL_TONES[label] || "muted";

const DEFAULT_THEME = {
  accent: "#1f7663",
  dark: "#0f172a",
  tint: "#e7f5ef",
  accent2: "#f8c14a",
};

// CSS variables that re-colour a mock screen / phone for one product
export const themeVars = (theme) => {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  return {
    "--m-accent": t.accent,
    "--m-dark": t.dark,
    "--m-tint": t.tint,
    "--m-accent2": t.accent2,
  };
};
