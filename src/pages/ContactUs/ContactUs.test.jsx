import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ContactUs from "./ContactUs";

describe("ContactUs component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ContactUs />
      </MemoryRouter>
    );
  });

  it("renders ContactUs page correctly", () => {
    expect(screen.getByText(/contáctanos/i)).toBeInTheDocument();
  });

  it("has the required form inputs", () => {
    const labels = ["Nombre Completo", "Correo Electrónico", "Mensaje"];
    labels.forEach(label => {
      expect(screen.getByLabelText(new RegExp(label, "i"))).toBeInTheDocument();
    });
  });
});