import { useEffect, useState } from "react";

import { getAnimes } from "../services/animeService";
import type { Anime } from "../types/anime";

export const useAnimes = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadAnimes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getAnimes(controller.signal);

        setAnimes(data);
      } catch {
        if (!controller.signal.aborted) {
          setError("Não foi possível carregar os animes.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadAnimes();

    return () => {
      controller.abort();
    };
  }, [reloadKey]);

  const retry = () => {
    setReloadKey((currentKey) => currentKey + 1);
  };

  return {
    animes,
    isLoading,
    error,
    retry,
  };
};