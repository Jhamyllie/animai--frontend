import "./SearchBar.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <label
        className="search-bar__label"
        htmlFor="anime-search"
      >
        Buscar animes
      </label>

      <input
        className="search-bar__input"
        id="anime-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por nome ou gênero"
      />
    </div>
  );
};

export default SearchBar;