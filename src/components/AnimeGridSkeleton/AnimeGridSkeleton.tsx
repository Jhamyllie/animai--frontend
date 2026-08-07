import "./AnimeGridSkeleton.css";

const AnimeGridSkeleton = () => {
  return (
    <section
      className="anime-grid-skeleton"
      aria-label="Carregando animes"
      aria-busy="true"
    >
      <h2>Carregando animes...</h2>

      <div className="anime-grid-skeleton__grid">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="anime-grid-skeleton__card"
            key={index}
            aria-hidden="true"
          >
            <div className="anime-grid-skeleton__image" />

            <div className="anime-grid-skeleton__content">
              <div className="anime-grid-skeleton__title" />
              <div className="anime-grid-skeleton__text" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimeGridSkeleton;