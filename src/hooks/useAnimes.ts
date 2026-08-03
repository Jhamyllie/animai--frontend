import { useEffect, useState } from "react";

import { getAnimes } from "../services/animeService";
import type { Anime } from "../types/anime";

export const useAnimes = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadAnimes = async () => {
      try {
        const data = await getAnimes();

        if (isMounted) {
          setAnimes(data);
        }
      } catch {
        if (isMounted) {
          setError("Não foi possível carregar os animes.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadAnimes();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    animes,
    isLoading,
    error,
  };
};