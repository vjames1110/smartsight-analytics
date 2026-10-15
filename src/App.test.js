import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero immediately and the sections once loaded", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: /smartsight analytics/i })
  ).toBeInTheDocument();

  expect(
    await screen.findByText(/software we have built/i, {}, { timeout: 8000 })
  ).toBeInTheDocument();
  expect(document.getElementById("services")).toBeInTheDocument();
  expect(document.getElementById("portfolio")).toBeInTheDocument();
  expect(document.getElementById("audit")).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /whatsapp/i }).length
  ).toBeGreaterThan(0);
});
