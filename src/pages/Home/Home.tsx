import AnimeGrid from "../../components/AnimeGrid/AnimeGrid";
import Hero from "../../components/Hero/Hero";
import { heroContent } from "../../constants/home";


const Home = () => {
    return (
    <>
      <Hero {...heroContent} />
      <AnimeGrid />
    </>
  );

};

export default Home;