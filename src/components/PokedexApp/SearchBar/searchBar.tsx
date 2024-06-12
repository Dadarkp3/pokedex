import { useState } from 'react';

import { handleInputChange, handleKeyUp } from 'lib/utils/searchUtils';
import { SearchBarProps } from 'models/SearchBarModels';

import styles from './searchBar.module.scss';

const SearchBar = ({ query, setQuery, isLoading }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(query);

  return (
    <div className={styles.searchInputContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleInputChange({ e, setSearchTerm })}
        onKeyUp={(e) => handleKeyUp({ e, setQuery, searchTerm, query })}
        placeholder="Digite o nome do Pokémon"
        disabled={isLoading}
      />
    </div>
  );
};

export default SearchBar;
