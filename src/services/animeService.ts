import type { Anime, AnimeApiResponse } from "../types/anime";
import { api } from "./api";

export const getAnimes = async (): Promise<Anime[]> => {
  const response = await api.get<AnimeApiResponse[]>("/animes");

  return response.data.map((anime) => ({
    id: anime.id,
    title: anime.nome,
    genre: anime.genero,
    episodes: anime.episodios,
  }));
};