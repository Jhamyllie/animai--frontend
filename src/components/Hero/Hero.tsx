import "./Hero.css";

type HeroProps = {
  title: string;
  description: string;
  buttonLabel: string;
};

const Hero = ({ title, description, buttonLabel }: HeroProps) => {
  return (
    // <section className="hero">
    <section id="inicio" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>

        <p className="hero__description">{description}</p>

        <a className="hero__button" href="#animes">
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};

export default Hero;