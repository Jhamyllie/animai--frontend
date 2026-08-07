import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AnimeSort from "./AnimeSort";

describe("AnimeSort", () => {
  it("deve informar a opção de ordenação selecionada", () => {
    const onChange = vi.fn();

    render(
      <AnimeSort
        value="default"
        onChange={onChange}
      />,
    );

    const select = screen.getByRole("combobox", {
      name: "Ordenar por",
    });

    fireEvent.change(select, {
      target: {
        value: "episodes-desc",
      },
    });

    expect(onChange).toHaveBeenCalledWith("episodes-desc");
  });
});