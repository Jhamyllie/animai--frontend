import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("deve renderizar o logo da aplicação", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("heading", { name: /animai/i })
    ).toBeInTheDocument();
  });

  it("deve renderizar os links de navegação", () => {
    render(<Navbar />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/populares/i)).toBeInTheDocument();
    // expect(screen.getByText(/favoritos/i)).toBeInTheDocument();
  });

  it("deve alternar para o tema escuro", () => {
    render(<Navbar />);

    const themeButton = screen.getByRole("button", {
      name: "Ativar tema escuro",
    });

    fireEvent.click(themeButton);

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    expect(
      screen.getByRole("button", {
        name: "Ativar tema claro",
      }),
    ).toBeInTheDocument();
  });
});