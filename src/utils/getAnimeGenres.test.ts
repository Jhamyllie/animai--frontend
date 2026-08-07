import { describe, expect, it } from "vitest";

import { getAnimeGenres } from "./getAnimeGenres";

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

describe("getAnimeGenres", () => {
  it("deve retornar os gêneros sem duplicações e em ordem alfabética", () => {
    const result = getAnimeGenres(animes);

    expect(result).toEqual([
      "Ação",
      "Shonen",
    ]);
  });
});