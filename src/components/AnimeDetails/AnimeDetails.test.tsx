import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AnimeDetails from "./AnimeDetails";

const anime = {
    id: 1,
    title: "Hunter x Hunter",
    genre: "Shonen",
    episodes: 148,
};

describe("AnimeDetails", () => {
    it("deve renderizar os detalhes do anime", () => {
        render(
            <AnimeDetails
                anime={anime}
                onClose={vi.fn()}
            />,
        );

        expect(
            screen.getByRole("heading", {
                name: "Hunter x Hunter",
            }),
        ).toBeInTheDocument();

        expect(screen.getByText("Gênero: Shonen")).toBeInTheDocument();
        expect(screen.getByText("Episódios: 148")).toBeInTheDocument();
    });

    it("deve chamar onClose ao clicar no botão de fechar", () => {
        const onClose = vi.fn();

        render(
            <AnimeDetails
                anime={anime}
                onClose={onClose}
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: "Fechar detalhes",
            }),
        );

        expect(onClose).toHaveBeenCalledOnce();
    });

    it("deve chamar onClose ao pressionar Escape", () => {
        const onClose = vi.fn();

        render(
            <AnimeDetails
                anime={anime}
                onClose={onClose}
            />,
        );

        fireEvent.keyDown(document, {
            key: "Escape",
        });

        expect(onClose).toHaveBeenCalledOnce();
    });
});