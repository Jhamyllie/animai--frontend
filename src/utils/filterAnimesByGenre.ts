import type { Anime } from "../types/anime";

export const filterAnimesByGenre = (
  animes: Anime[],
  genre: string,
): Anime[] => {
  if (!genre) {
    return animes;
  }

  const normalizedGenre = genre.trim().toLowerCase();

  return animes.filter(
    (anime) =>
      anime.genre.trim().toLowerCase() === normalizedGenre,
  );
};