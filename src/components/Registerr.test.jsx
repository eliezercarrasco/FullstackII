import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Registerr from "./Registerr";

describe("Registerr component", () => {
  it("renders registration form", () => {
    render(<Registerr />);
    // Verificar que existan los inputs clave
    expect(screen.getByLabelText(/Nombre Completo:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico:/i)).toBeInTheDocument();
  });

  it("accepts typing in username field", () => {
    render(<Registerr />);
    const inputUsername = screen.getByLabelText(/Nombre Completo:/i);
    fireEvent.change(inputUsername, { target: { value: "Eliezer" } });
    expect(inputUsername.value).toBe("Eliezer");
  });
});