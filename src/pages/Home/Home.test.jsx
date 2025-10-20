import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it("renders the Home page", () => {
    expect(screen.getByText(/inicio|bienvenido|home/i)).toBeInTheDocument();
  });

  it("contains at least one navigation link", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });
});