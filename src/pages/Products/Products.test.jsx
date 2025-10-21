import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Products from "./Products";

// === MOCK de localStorage ===
const mockCarrito = [
  { nombre: "Torta Cuadrada de Chocolate", precio: 45000, cantidad: 1, img: "img.jpg" }
];

const localStorageMock = {
  getItem: vi.fn(() => JSON.stringify(mockCarrito)),
  setItem: vi.fn(),
  removeItem: vi.fn()
};

global.localStorage = localStorageMock;

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

  it("displays at least one product from mock localStorage", () => {
    expect(screen.getByText(/Torta Cuadrada de Chocolate/i)).toBeInTheDocument();
  });
});
