import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
    it("deve renderizar o campo de pesquisa", () => {
        const onChange = vi.fn();

        render(
            <SearchBar
                value=""
                onChange={onChange}
            />,
        );

        const input = screen.getByRole("searchbox", {
            name: /buscar anime/i,
        });

        expect(input).toBeInTheDocument();
    });

    it("deve enviar o texto digitado", () => {
  const onChange = vi.fn();

  render(
    <SearchBar
      value=""
      onChange={onChange}
    />,
  );

  const input = screen.getByRole("searchbox", {
    name: /buscar anime/i,
  });

  fireEvent.change(input, {
    target: {
      value: "Naruto",
    },
  });

  expect(onChange).toHaveBeenCalledWith("Naruto");
});
});