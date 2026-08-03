import AnimeGrid from "../../components/AnimeGrid/AnimeGrid";
import Hero from "../../components/Hero/Hero";
import { heroContent } from "../../constants/home";
import { useAnimes } from "../../hooks/useAnimes";

const Home = () => {
  const { animes, isLoading, error } = useAnimes();

  return (
    <>
      <Hero {...heroContent} />

      {isLoading && <p role="status">Carregando animes...</p>}

      {error && <p role="alert">{error}</p>}

      {!isLoading && !error && (
        <AnimeGrid title="Animes disponíveis" animes={animes} />
      )}
    </>
  );
};

export default Home;