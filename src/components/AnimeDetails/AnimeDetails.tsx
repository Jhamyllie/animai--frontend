import { X } from "lucide-react";
import { useEffect } from "react";
import type { Anime } from "../../types/anime";
import "./AnimeDetails.css";

type AnimeDetailsProps = {
  anime: Anime;
  onClose: () => void;
};

const AnimeDetails = ({ anime, onClose }: AnimeDetailsProps) => {
    useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose]);

  return (
    <div className="anime-details__overlay">
      <section
        className="anime-details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="anime-details-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <h2 id="anime-details-title">{anime.title}</h2>

        <p>Gênero: {anime.genre}</p>
        <p>Episódios: {anime.episodes}</p>

        {anime.rating !== undefined && (
          <p>Avaliação: {anime.rating}</p>
        )}
      </section>
    </div>
  );
};

export default AnimeDetails;