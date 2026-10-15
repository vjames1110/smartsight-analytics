import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main sections and primary calls to action", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: /smartsight analytics/i })
  ).toBeInTheDocument();
  expect(document.getElementById("services")).toBeInTheDocument();
  expect(document.getElementById("portfolio")).toBeInTheDocument();
  expect(document.getElementById("audit")).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /whatsapp/i }).length
  ).toBeGreaterThan(0);
});
