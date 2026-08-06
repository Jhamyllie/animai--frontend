import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLightTheme = theme === "light";

  return (

    <nav className="navbar">
      <h1 className="navbar__logo">AnimAi</h1>
      <button
        className="navbar__menu-button"
        type="button"
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMenuOpen ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>

      <div
        className={`navbar__actions ${isMenuOpen ? "navbar__actions--open" : ""
          }`}
      >
        <ul id="navbar-menu" className="navbar__menu">
          <li>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#animes" onClick={() => setIsMenuOpen(false)}>
              Populares
            </a>
          </li>
        </ul>

        <button
          className="navbar__theme-button"
          type="button"
          onClick={toggleTheme}
          aria-label={
            isLightTheme
              ? "Ativar tema escuro"
              : "Ativar tema claro"
          }
          title={
            isLightTheme
              ? "Ativar tema escuro"
              : "Ativar tema claro"
          }
        >
          {isLightTheme ? (
            <Moon size={20} aria-hidden="true" />
          ) : (
            <Sun size={20} aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;