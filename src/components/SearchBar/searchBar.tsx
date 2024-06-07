import { ChangeEvent, FC } from 'react';

import { SearchBarProps } from 'models/searchBarModels';

const SearchBar: FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      placeholder="Digite o nome do Pokémon"
    />
  );
};

export default SearchBar;
