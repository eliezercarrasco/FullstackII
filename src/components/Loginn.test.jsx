import { render, screen, fireEvent } from "@testing-library/react"; 
import { describe, it, expect, vi, beforeEach } from "vitest";
import Loginn from "./Loginn";
import { loginUsuario } from "../services/loginLogic"; // Ajusta la ruta según tu proyecto

// === MOCK del módulo loginLogic ===
vi.mock("../services/loginLogic"); 

describe("Loginn component", () => {

  beforeEach(() => {
    // Mock retorno de loginUsuario
    loginUsuario.mockReturnValue({
      exito: true,
      mensaje: "Bienvenido",
      beneficios: ["10% de descuento"]
    });

    // Mock alert para evitar popups reales
    window.alert = vi.fn();
  });

  it("renders loginn form", () => {
    render(<Loginn />);
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("allows typing in email field", () => {
    render(<Loginn />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "user@example.com" } });
    expect(input.value).toBe("user@example.com");
  });

  it("calls loginUsuario and alert on submit", () => {
    render(<Loginn />);
    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const button = screen.getByRole("button", { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(button);

    expect(loginUsuario).toHaveBeenCalledWith("test@example.com", "123456");
    expect(window.alert).toHaveBeenCalled();
  });
});