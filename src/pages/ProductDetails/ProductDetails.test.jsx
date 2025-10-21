import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";

describe("ProductDetails component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProductDetails />
      </MemoryRouter>
    );
  });

  it("renders the ProductDetails page", () => {
    expect(
      screen.getByRole("heading", { name: /detalles de productos/i })
    ).toBeInTheDocument();
  });

  it("displays a price or add-to-cart button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeVisible();
  });
});