import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Home from "./Home";

vi.mock("../../hooks/useAnimes", () => ({
  useAnimes: () => ({
    animes: [
      {
        id: 1,
        title: "Naruto",
        genre: "Shonen",
        episodes: 500,
      },
      {
        id: 2,
        title: "Frieren",
        genre: "Shonen",
        episodes: 28,
      },
      {
        id: 3,
        title: "Attack on Titan",
        genre: "Ação",
        episodes: 687,
      },
    ],
    isLoading: false,
    error: null,
    retry: vi.fn(),
  }),
}));

describe("Home", () => {
  it("deve limpar busca, gênero e ordenação", () => {
    render(<Home />);

    const search = screen.getByRole("searchbox", {
      name: "Buscar animes",
    });

    const genre = screen.getByRole("combobox", {
      name: "Filtrar por gênero",
    });

    const sort = screen.getByRole("combobox", {
      name: "Ordenar por",
    });

    fireEvent.change(search, {
      target: { value: "Naruto" },
    });

    fireEvent.change(genre, {
      target: { value: "Shonen" },
    });

    fireEvent.change(sort, {
      target: { value: "episodes-desc" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: "Limpar filtros",
      }),
    );

    expect(search).toHaveValue("");
    expect(genre).toHaveValue("");
    expect(sort).toHaveValue("default");

    expect(
      screen.queryByRole("button", {
        name: "Limpar filtros",
      }),
    ).not.toBeInTheDocument();
  });
});