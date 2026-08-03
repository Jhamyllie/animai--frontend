import type { Anime } from "../../types/anime";
import AnimeCard from "../AnimeCard/AnimeCard";

import "./AnimeGrid.css";

type AnimeGridProps = {
  title: string;
  animes: Anime[];
};

const AnimeGrid = ({ title, animes }: AnimeGridProps) => {
  return (
    <section className="anime-grid-section" id="animes">
      <div className="anime-grid-section__container">
        <h2 className="anime-grid-section__title">{title}</h2>

        <div className="anime-grid">
          {animes.map((anime) => (
            <AnimeCard
              key={anime.id}
              title={anime.title}
              genre={anime.genre}
              episodes={anime.episodes}
              imageUrl={anime.imageUrl}
              rating={anime.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeGrid;