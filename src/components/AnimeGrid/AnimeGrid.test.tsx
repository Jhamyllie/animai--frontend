import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { Anime } from "../../types/anime";
import AnimeGrid from "./AnimeGrid";

const animes: Anime[] = [
  {
    id: 1,
    title: "Frieren",
    genre: "Fantasia",
    episodes: 28,
    imageUrl: "https://example.com/frieren.jpg",
    rating: 9.3,
  },
  {
    id: 2,
    title: "Fullmetal Alchemist",
    genre: "Shounen",
    episodes: 64,
    imageUrl: "https://example.com/fullmetal.jpg",
    rating: 9.1,
  },
  {
    id: 3,
    title: "Attack on Titan",
    genre: "Ação",
    episodes: 87,
    imageUrl: "https://example.com/attack-on-titan.jpg",
    rating: 9,
  },
  {
    id: 4,
    title: "Hunter x Hunter",
    genre: "Shounen",
    episodes: 148,
    imageUrl: "https://example.com/hunter-x-hunter.jpg",
    rating: 8.9,
  },
];

const renderAnimeGrid = () => {
  return render(
    <AnimeGrid
      title="Populares"
      animes={animes}
    />,
  );
};

describe("AnimeGrid", () => {
  it("deve renderizar o título da seção", () => {
    renderAnimeGrid();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Populares",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar um card para cada anime", () => {
    renderAnimeGrid();

    expect(screen.getAllByRole("article")).toHaveLength(4);
  });

  it("deve renderizar os animes da lista", () => {
    renderAnimeGrid();

    expect(screen.getByText("Frieren")).toBeInTheDocument();
    expect(screen.getByText("Fullmetal Alchemist")).toBeInTheDocument();
    expect(screen.getByText("Attack on Titan")).toBeInTheDocument();
    expect(screen.getByText("Hunter x Hunter")).toBeInTheDocument();
  });

  it("deve informar qual anime foi selecionado", () => {
    const onSelectAnime = vi.fn();

    render(
      <AnimeGrid
        title="Animes disponíveis"
        animes={animes}
        onSelectAnime={onSelectAnime}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: `Ver detalhes de ${animes[0].title}`,
      }),
    );

    expect(onSelectAnime).toHaveBeenCalledWith(animes[0]);
  });
});