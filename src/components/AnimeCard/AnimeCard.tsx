import type { Anime } from "../../types/anime";

import "./AnimeCard.css";

type AnimeCardProps = Pick<Anime, "title" | "imageUrl" | "rating">;

const AnimeCard = ({ title, imageUrl, rating }: AnimeCardProps) => {
  return (
    <article className="anime-card">
      <img
        className="anime-card__image"
        src={imageUrl}
        alt={`Capa do anime ${title}`}
      />

      <div className="anime-card__content">
        <h3 className="anime-card__title">{title}</h3>

        <span
          className="anime-card__rating"
          aria-label={`Avaliação: ${rating}`}
        >
          <span aria-hidden="true">★</span> {rating}
        </span>
      </div>
    </article>
  );
};

export default AnimeCard;