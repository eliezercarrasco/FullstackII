import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Products from "./Products";

describe("Products component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );
  });

  it("renders the Products list page", () => {
    expect(screen.getByRole("heading", { name: /productos/i })).toBeInTheDocument();
  });

  it("displays at least one product or placeholder", () => {
    const items = screen.getAllByText(/producto/i);
    expect(items.length).toBeGreaterThan(0);
  });
});