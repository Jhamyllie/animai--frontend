import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AnimeGenreFilter from "./AnimeGenreFilter";

describe("AnimeGenreFilter", () => {
  it("deve exibir os gêneros disponíveis", () => {
    render(
      <AnimeGenreFilter
        genres={["Ação", "Seinen", "Shonen"]}
        value=""
        onChange={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("option", { name: "Todos" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "Ação" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "Seinen" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "Shonen" }),
    ).toBeInTheDocument();
  });

  it("deve informar o gênero selecionado", () => {
    const onChange = vi.fn();

    render(
      <AnimeGenreFilter
        genres={["Ação", "Seinen", "Shonen"]}
        value=""
        onChange={onChange}
      />,
    );

    fireEvent.change(
      screen.getByRole("combobox", {
        name: "Filtrar por gênero",
      }),
      {
        target: { value: "Seinen" },
      },
    );

    expect(onChange).toHaveBeenCalledWith("Seinen");
  });
});