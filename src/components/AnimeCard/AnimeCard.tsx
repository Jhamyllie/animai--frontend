import type { Anime } from "../../types/anime";

import "./AnimeCard.css";

type AnimeCardProps = Pick<
  Anime,
  "title" | "genre" | "episodes" | "imageUrl" | "rating"
> & {
  onSelect?: () => void;
};

const AnimeCard = ({
  title,
  genre,
  episodes,
  imageUrl,
  rating,
  onSelect,
}: AnimeCardProps) => {
  return (
    <article className="anime-card">
      <button
        className="anime-card__button"
        type="button"
        onClick={onSelect}
        aria-label={`Ver detalhes de ${title}`}
      >
        {/* seu conteúdo atual fica aqui */}
        {imageUrl ? (
          <img
            className="anime-card__image"
            src={imageUrl}
            alt={`Capa do anime ${title}`}
          />
        ) : (
          <div
            className="anime-card__placeholder"
            aria-label={`Anime sem capa: ${title}`}
          >
            <span aria-hidden="true">{title.charAt(0)}</span>
          </div>
        )}

        <div className="anime-card__content">
          <h3 className="anime-card__title">{title}</h3>

          <p className="anime-card__details">
            {genre} • {episodes} episódios
          </p>

          {rating !== undefined && (
            <span
              className="anime-card__rating"
              aria-label={`Avaliação: ${rating}`}
            >
              <span aria-hidden="true">★</span> {rating}
            </span>
          )}
        </div>
      </button>
    </article>
  );
};

export default AnimeCard;