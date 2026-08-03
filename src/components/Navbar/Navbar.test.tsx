import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("deve renderizar o logo da aplicação", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("heading", { name: /animai/i })
    ).toBeInTheDocument();
  });

  it("deve renderizar os links de navegação", () => {
    render(<Navbar />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/populares/i)).toBeInTheDocument();
    expect(screen.getByText(/favoritos/i)).toBeInTheDocument();
  });
});