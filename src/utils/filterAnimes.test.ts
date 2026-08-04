import { describe, expect, it } from "vitest";

import type { Anime } from "../types/anime";
import { filterAnimes } from "./filterAnimes";

const animes: Anime[] = [
  {
    id: 1,
    title: "Frieren",
    genre: "Fantasia",
    episodes: 28,
  },
  {
    id: 2,
    title: "Naruto Shippuden",
    genre: "Shounen",
    episodes: 500,
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    genre: "Shounen",
    episodes: 59,
  },
];

describe("filterAnimes", () => {
  it("deve retornar todos os animes quando a busca estiver vazia", () => {
    const result = filterAnimes(animes, "");

    expect(result).toEqual(animes);
  });

  it("deve filtrar pelo título ignorando maiúsculas e espaços", () => {
    const result = filterAnimes(animes, "  FRIEREN  ");

    expect(result.map((anime) => anime.title)).toEqual([
      "Frieren",
    ]);
  });

  it("deve filtrar pelo gênero ignorando maiúsculas e espaços", () => {
    const result = filterAnimes(animes, "  shounen  ");

    expect(result.map((anime) => anime.title)).toEqual([
      "Naruto Shippuden",
      "Jujutsu Kaisen",
    ]);
  });
});