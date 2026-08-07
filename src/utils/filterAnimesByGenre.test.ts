import { describe, expect, it } from "vitest";

import { filterAnimesByGenre } from "./filterAnimesByGenre";

const animes = [
  {
    id: 1,
    title: "Naruto",
    genre: "Shonen",
    episodes: 500,
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    genre: "Shonen",
    episodes: 59,
  },
  {
    id: 3,
    title: "Attack on Titan",
    genre: "Ação",
    episodes: 687,
  },
];

describe("filterAnimesByGenre", () => {
  it("deve retornar todos os animes quando nenhum gênero for selecionado", () => {
    const result = filterAnimesByGenre(animes, "");

    expect(result).toEqual(animes);
  });

  it("deve filtrar os animes pelo gênero", () => {
    const result = filterAnimesByGenre(
      animes,
      "  SHONEN  ",
    );

    expect(result.map((anime) => anime.title)).toEqual([
      "Naruto",
      "Jujutsu Kaisen",
    ]);
  });
});