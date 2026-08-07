import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AnimeGridSkeleton from "./AnimeGridSkeleton";

describe("AnimeGridSkeleton", () => {
  it("deve indicar que os animes estão sendo carregados", () => {
    render(<AnimeGridSkeleton />);

    const skeleton = screen.getByLabelText("Carregando animes");

    expect(skeleton).toHaveAttribute("aria-busy", "true");

    expect(
      screen.getByRole("heading", {
        name: "Carregando animes...",
      }),
    ).toBeInTheDocument();
  });
});