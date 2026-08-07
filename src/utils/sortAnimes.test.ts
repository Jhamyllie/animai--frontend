import { describe, expect, it } from "vitest";

import { sortAnimes } from "./sortAnimes";

const animes = [
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
        title: "Hunter x Hunter",
        genre: "Shonen",
        episodes: 148,
    },
];

describe("sortAnimes", () => {
    it("deve ordenar os animes pelo título", () => {
        const result = sortAnimes(animes, "title-asc");

        expect(result.map((anime) => anime.title)).toEqual([
            "Frieren",
            "Hunter x Hunter",
            "Naruto",
        ]);
    });

    it("deve ordenar pela menor quantidade de episódios", () => {
        const result = sortAnimes(animes, "episodes-asc");

        expect(result.map((anime) => anime.episodes)).toEqual([
            28,
            148,
            500,
        ]);
    });

    it("deve ordenar pela maior quantidade de episódios", () => {
        const result = sortAnimes(animes, "episodes-desc");

        expect(result.map((anime) => anime.episodes)).toEqual([
            500,
            148,
            28,
        ]);
    });

    it("não deve alterar a lista original", () => {
        const originalOrder = [...animes];

        sortAnimes(animes, "title-asc");

        expect(animes).toEqual(originalOrder);
    });
});