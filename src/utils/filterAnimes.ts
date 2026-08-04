import type { Anime } from "../types/anime";

export const filterAnimes = (
  animes: Anime[],
  searchTerm: string,
): Anime[] => {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  return animes.filter((anime) => {
    const title = anime.title.toLowerCase();
    const genre = anime.genre.toLowerCase();

    return (
      title.includes(normalizedSearchTerm) ||
      genre.includes(normalizedSearchTerm)
    );
  });
};