import { useState } from 'react';

import ControllersButtons from 'components/PokedexApp/ControllersButtons/controllersButtons';
import InfoDisplay from 'components/PokedexApp/InfoDisplay/infoDisplay';
import Lights from 'components/PokedexApp/Lights/lights';
import SearchBar from 'components/PokedexApp/SearchBar/searchBar';
import SmallScreen from 'components/PokedexApp/SmallScreen/smallScreen';
import usePokemonSearch from 'hooks/usePokemonSearch';

import styles from './pokedexApp.module.scss';

const PokedexApp = () => {
  const [query, setQuery] = useState<string>('');
  const { pokemon, loading, error } = usePokemonSearch({ query });

  return (
    <div className={styles.container}>
      <Lights />
      <SearchBar query={query} setQuery={setQuery} isLoading={loading} />
      <SmallScreen pokemon={pokemon} loading={loading} />
      <ControllersButtons />
      <InfoDisplay pokemon={pokemon} loading={loading} error={error} />
    </div>
  );
};

export default PokedexApp;
