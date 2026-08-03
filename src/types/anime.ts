export type Anime = {
  id: number;
  title: string;
  genre: string;
  episodes: number;
  imageUrl?: string;
  rating?: number;
};

export type AnimeApiResponse = {
  id: number;
  nome: string;
  genero: string;
  episodios: number;
};