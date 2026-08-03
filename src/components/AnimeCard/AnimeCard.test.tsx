import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AnimeCard from "./AnimeCard";

const anime = {
  title: "Frieren",
  imageUrl: "https://example.com/frieren.jpg",
  rating: 9.3,
};

describe("AnimeCard", () => {
  it("deve renderizar o nome do anime", () => {
    render(<AnimeCard {...anime} />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Frieren",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a imagem com texto alternativo", () => {
    render(<AnimeCard {...anime} />);

    const image = screen.getByRole("img", {
      name: "Capa do anime Frieren",
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", anime.imageUrl);
  });

  it("deve renderizar a avaliação", () => {
    render(<AnimeCard {...anime} />);

    expect(
      screen.getByLabelText("Avaliação: 9.3"),
    ).toBeInTheDocument();
  });
});