import type { Anime, AnimeApiResponse } from "../types/anime";
import { api } from "./api";

export const getAnimes = async (
  signal?: AbortSignal,
): Promise<Anime[]> => {
  const response = await api.get<AnimeApiResponse[]>("/animes", {
    signal,
  });

  return response.data.map((anime) => ({
    id: anime.id,
    title: anime.nome,
    genre: anime.genero,
    episodes: anime.episodios,
  }));
};