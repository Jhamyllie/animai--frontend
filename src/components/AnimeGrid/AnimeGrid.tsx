import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeGrid = () => {
  return (
    <section>
      <h2>Populares</h2>

      <div>
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </section>
  );
};

export default AnimeGrid;