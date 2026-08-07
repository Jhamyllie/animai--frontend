import "./Home.css";
import AnimeGrid from "../../components/AnimeGrid/AnimeGrid";
import Hero from "../../components/Hero/Hero";
import RequestState from "../../components/RequestState/RequestState";
import { heroContent } from "../../constants/home";
import { useAnimes } from "../../hooks/useAnimes";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { filterAnimes } from "../../utils/filterAnimes";
import type { Anime } from "../../types/anime";
import AnimeDetails from "../../components/AnimeDetails/AnimeDetails";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const { animes, isLoading, error, retry } = useAnimes();

  const filteredAnimes = filterAnimes(animes, searchTerm);

  return (
    <>
      <Hero {...heroContent} />
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
      />
      {isLoading && (
        <RequestState
          variant="loading"
          message="Carregando animes..."
        />
      )}

      {!isLoading && error && (
        <RequestState
          variant="error"
          message={error}
          onRetry={retry}
        />
      )}

      {!isLoading && !error && (
        filteredAnimes.length > 0 ? (
          <AnimeGrid
            title="Animes disponíveis"
            animes={filteredAnimes}
            onSelectAnime={setSelectedAnime}
          />
        ) : (
          <section className="home__empty-state" role="status">
            <p>
              Nenhum anime encontrado para “{searchTerm.trim()}”.
            </p>
          </section>
        )
      )}
      {selectedAnime && (
        <AnimeDetails
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </>
  );
};

export default Home;