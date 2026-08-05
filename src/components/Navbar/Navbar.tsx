import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const isLightTheme = theme === "light";

  return (

    <nav className="navbar">
      <h1 className="navbar__logo">AnimAi</h1>
      <div className="navbar__actions">
        <ul className="navbar__menu">
          <li>
            <a href="#inicio">Home</a>
          </li>

          <li>
            <a href="#animes">Populares</a>
          </li>
{/* 
          <li>
            <a href="#favoritos">Favoritos</a>
          </li> */}
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