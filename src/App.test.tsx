import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  it("renders Vite and React logos", () => {
    render(<App />);

    // Check for the logos and main heading
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
