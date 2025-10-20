import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Loginn from "./Loginn";

describe("Loginn component", () => {
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
});