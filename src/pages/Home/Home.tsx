import AnimeGrid from "../../components/AnimeGrid/AnimeGrid";
import Hero from "../../components/Hero/Hero";
import RequestState from "../../components/RequestState/RequestState";
import { heroContent } from "../../constants/home";
import { useAnimes } from "../../hooks/useAnimes";

const Home = () => {
  const { animes, isLoading, error, retry } = useAnimes();

  return (
    <>
      <Hero {...heroContent} />

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
        <AnimeGrid
          title="Animes disponíveis"
          animes={animes}
        />
      )}
    </>
  );
};

export default Home;