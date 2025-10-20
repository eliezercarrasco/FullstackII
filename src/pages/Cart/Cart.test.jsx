import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Cart from "./Cart";

describe("Cart component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
  });

  it("renders Cart page without crashing", () => {
    expect(screen.getByRole("heading", { name: /tu carrito/i })).toBeInTheDocument();
  });

  it("shows a message when the cart is empty", () => {
    const emptyMessage = screen.getByText(/No hay productos en tu carrito/i);
    expect(emptyMessage).toBeVisible();
  });
});