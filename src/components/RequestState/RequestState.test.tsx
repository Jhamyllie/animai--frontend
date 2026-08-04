import {
    fireEvent,
    render,
    screen,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import RequestState from "./RequestState";

describe("RequestState", () => {
    it("deve renderizar o estado de carregamento", () => {
        render(
            <RequestState
                variant="loading"
                message="Carregando animes..."
            />,
        );

        expect(screen.getByRole("status")).toHaveTextContent(
            "Carregando animes...",
        );

        expect(
            screen.queryByRole("button", {
                name: "Tentar novamente",
            }),
        ).not.toBeInTheDocument();
    });

    it("deve renderizar o estado de erro", () => {
        const onRetry = vi.fn();

        render(
            <RequestState
                variant="error"
                message="Não foi possível carregar os animes."
                onRetry={onRetry}
            />,
        );

        expect(screen.getByRole("alert")).toHaveTextContent(
            "Não foi possível carregar os animes.",
        );

        expect(
            screen.getByRole("button", {
                name: "Tentar novamente",
            }),
        ).toBeInTheDocument();
    });

    it("deve executar uma nova tentativa ao clicar no botão", () => {
        const onRetry = vi.fn();

        render(
            <RequestState
                variant="error"
                message="Não foi possível carregar os animes."
                onRetry={onRetry}
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: "Tentar novamente",
            }),
        );

        expect(onRetry).toHaveBeenCalledOnce();
    });
});