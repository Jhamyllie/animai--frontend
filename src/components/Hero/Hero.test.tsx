import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Hero from "./Hero";

const heroProps = {
  title: "Descubra seu próximo anime favorito",
  description:
    "Explore milhares de títulos, descubra novidades e monte sua coleção.",
  buttonLabel: "Explorar",
};

describe("Hero", () => {
  it("deve renderizar o título", () => {
    render(<Hero {...heroProps} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /descubra seu próximo anime favorito/i,
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição", () => {
    render(<Hero {...heroProps} />);

    expect(
      screen.getByText(
        /explore milhares de títulos, descubra novidades e monte sua coleção/i,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar o link para a seção de animes", () => {
    render(<Hero {...heroProps} />);

    const exploreLink = screen.getByRole("link", {
      name: /explorar/i,
    });

    expect(exploreLink).toBeInTheDocument();
    expect(exploreLink).toHaveAttribute("href", "#animes");
  });
});