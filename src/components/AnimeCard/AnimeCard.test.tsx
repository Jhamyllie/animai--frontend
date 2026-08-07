import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AnimeCard from "./AnimeCard";

const anime = {
  title: "Frieren",
  genre: "Fantasia",
  episodes: 28,
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

  it("deve chamar onSelect ao clicar no card", () => {
    const onSelect = vi.fn();

    render(
      <AnimeCard
        title="Frieren"
        genre="Shonen"
        episodes={28}
        onSelect={onSelect}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Ver detalhes de Frieren",
      }),
    );

    expect(onSelect).toHaveBeenCalledOnce();
  });
});