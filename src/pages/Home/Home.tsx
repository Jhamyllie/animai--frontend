import { useState } from "react";

import "./Home.css";

import AnimeDetails from "../../components/AnimeDetails/AnimeDetails";
import AnimeGenreFilter from "../../components/AnimeGenreFilter/AnimeGenreFilter";
import AnimeGrid from "../../components/AnimeGrid/AnimeGrid";
import AnimeGridSkeleton from "../../components/AnimeGridSkeleton/AnimeGridSkeleton";
import AnimeSort from "../../components/AnimeSort/AnimeSort";
import Hero from "../../components/Hero/Hero";
import RequestState from "../../components/RequestState/RequestState";
import SearchBar from "../../components/SearchBar/SearchBar";

import { heroContent } from "../../constants/home";
import { useAnimes } from "../../hooks/useAnimes";
import type { Anime } from "../../types/anime";
import { filterAnimes } from "../../utils/filterAnimes";
import { filterAnimesByGenre } from "../../utils/filterAnimesByGenre";
import { getAnimeGenres } from "../../utils/getAnimeGenres";
import {
  sortAnimes,
  type AnimeSortOption,
} from "../../utils/sortAnimes";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnime, setSelectedAnime] =
    useState<Anime | null>(null);
  const [sortOption, setSortOption] =
    useState<AnimeSortOption>("default");
  const [selectedGenre, setSelectedGenre] = useState("");

  const { animes, isLoading, error, retry } = useAnimes();

  const genres = getAnimeGenres(animes);

  const filteredAnimes = filterAnimes(animes, searchTerm);

  const genreFilteredAnimes = filterAnimesByGenre(
    filteredAnimes,
    selectedGenre,
  );

  const sortedAnimes = sortAnimes(
    genreFilteredAnimes,
    sortOption,
  );

  return (
    <>
      <Hero {...heroContent} />

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <div className="home__controls">
        <AnimeGenreFilter
          genres={genres}
          value={selectedGenre}
          onChange={setSelectedGenre}
        />

        <AnimeSort
          value={sortOption}
          onChange={setSortOption}
        />
      </div>

      {isLoading && <AnimeGridSkeleton />}

      {!isLoading && error && (
        <RequestState
          variant="error"
          message={error}
          onRetry={retry}
        />
      )}

      {!isLoading && !error && (
        sortedAnimes.length > 0 ? (
          <AnimeGrid
            title="Animes disponíveis"
            animes={sortedAnimes}
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