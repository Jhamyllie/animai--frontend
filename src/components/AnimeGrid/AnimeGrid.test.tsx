import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AnimeGrid from "./AnimeGrid";

describe("AnimeGrid", () => {
  it("deve renderizar o título da seção", () => {
    render(<AnimeGrid />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Populares",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar os cards dos animes", () => {
    render(<AnimeGrid />);

    expect(screen.getAllByRole("article")).toHaveLength(4);
  });

  it("deve renderizar os animes da lista", () => {
    render(<AnimeGrid />);

    expect(screen.getByText("Frieren")).toBeInTheDocument();
    expect(screen.getByText("Fullmetal Alchemist")).toBeInTheDocument();
    expect(screen.getByText("Attack on Titan")).toBeInTheDocument();
    expect(screen.getByText("Hunter x Hunter")).toBeInTheDocument();
  });
});