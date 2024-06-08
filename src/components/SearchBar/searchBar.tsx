import { useState } from 'react';

import { handleInputChange, handleKeyUp } from 'lib/utils/searchUtils';
import { SearchBarProps } from 'models/searchBarModels';

const SearchBar = ({ query, setQuery, isLoading }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(query);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => handleInputChange(e, setSearchTerm)}
      onKeyUp={(e) => handleKeyUp(e, setQuery, searchTerm)}
      placeholder="Digite o nome do Pokémon"
      disabled={isLoading}
    />
  );
};

export default SearchBar;
