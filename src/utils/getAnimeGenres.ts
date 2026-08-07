import type { Anime } from "../types/anime";

export const getAnimeGenres = (
  animes: Anime[],
): string[] => {
  const genres = animes.map((anime) => anime.genre.trim());

  return [...new Set(genres)].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
};