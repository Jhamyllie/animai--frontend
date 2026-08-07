import type { AnimeSortOption } from "../../utils/sortAnimes";

import "./AnimeSort.css";

type AnimeSortProps = {
  value: AnimeSortOption;
  onChange: (value: AnimeSortOption) => void;
};

const AnimeSort = ({ value, onChange }: AnimeSortProps) => {
  return (
    <div className="anime-sort">
      <label htmlFor="anime-sort">Ordenar por</label>

      <select
        id="anime-sort"
        value={value}
        onChange={(event) =>
          onChange(event.target.value as AnimeSortOption)
        }
      >
        <option value="default">Padrão</option>
        <option value="title-asc">Título: A–Z</option>
        <option value="episodes-asc">
          Menos episódios
        </option>
        <option value="episodes-desc">
          Mais episódios
        </option>
      </select>
    </div>
  );
};

export default AnimeSort;