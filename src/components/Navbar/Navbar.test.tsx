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

  it("deve abrir e fechar o menu de navegação", () => {
    render(<Navbar />);

    const menuButton = screen.getByRole("button", {
      name: "Abrir menu",
    });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(
      screen.getByRole("button", { name: "Fechar menu" }),
    ).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(
      screen.getByRole("button", { name: "Fechar menu" }),
    );

    expect(
      screen.getByRole("button", { name: "Abrir menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("deve fechar o menu ao clicar em um link de navegação", () => {
    render(<Navbar />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    );

    expect(
      screen.getByRole("button", {
        name: "Fechar menu",
      }),
    ).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(
      screen.getByRole("link", {
        name: "Populares",
      }),
    );

    expect(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    ).toHaveAttribute("aria-expanded", "false");
  });
});