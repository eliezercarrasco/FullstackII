import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it("renders navigation bar", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("contains at least one link", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });
});