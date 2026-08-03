import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeGrid.css";

const animes = [
  {
    id: 1,
    title: "Frieren",
    imageUrl: "https://placehold.co/300x450/6d28d9/ffffff?text=Frieren",
    rating: 9.3,
  },
  {
    id: 2,
    title: "Fullmetal Alchemist",
    imageUrl:
      "https://placehold.co/300x450/312e81/ffffff?text=Fullmetal+Alchemist",
    rating: 9.1,
  },
  {
    id: 3,
    title: "Attack on Titan",
    imageUrl:
      "https://placehold.co/300x450/7c3aed/ffffff?text=Attack+on+Titan",
    rating: 9.0,
  },
  {
    id: 4,
    title: "Hunter x Hunter",
    imageUrl:
      "https://placehold.co/300x450/4c1d95/ffffff?text=Hunter+x+Hunter",
    rating: 8.9,
  },
];

const AnimeGrid = () => {
  return (
    <section className="anime-grid-section" id="animes">
      <div className="anime-grid-section__container">
        <h2 className="anime-grid-section__title">Populares</h2>

        <div className="anime-grid">
          {animes.map((anime) => (
            <AnimeCard
              key={anime.id}
              title={anime.title}
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