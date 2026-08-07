import "./AnimeGenreFilter.css";

type AnimeGenreFilterProps = {
  genres: string[];
  value: string;
  onChange: (genre: string) => void;
};

const AnimeGenreFilter = ({
  genres,
  value,
  onChange,
}: AnimeGenreFilterProps) => {
  return (
    <div className="anime-genre-filter">
      <label htmlFor="anime-genre">
        Filtrar por gênero
      </label>

      <select
        id="anime-genre"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Todos</option>

        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AnimeGenreFilter;