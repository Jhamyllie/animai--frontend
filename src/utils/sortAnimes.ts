import type { Anime } from "../types/anime";

export type AnimeSortOption =
  | "default"
  | "title-asc"
  | "episodes-asc"
  | "episodes-desc";

export const sortAnimes = (
  animes: Anime[],
  sortOption: AnimeSortOption,
): Anime[] => {
  const sortedAnimes = [...animes];

  switch (sortOption) {
    case "title-asc":
      return sortedAnimes.sort((a, b) =>
        a.title.localeCompare(b.title),
      );

    case "episodes-asc":
      return sortedAnimes.sort(
        (a, b) => a.episodes - b.episodes,
      );

    case "episodes-desc":
      return sortedAnimes.sort(
        (a, b) => b.episodes - a.episodes,
      );

    default:
      return sortedAnimes;
  }
};