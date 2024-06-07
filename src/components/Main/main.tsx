'use client';

import { useState } from 'react';

import ErrorMessage from 'components/ErrorMessage/errorMessage';
import Header from 'components/Header/header';
import Loading from 'components/Loading/loading';
import SearchBar from 'components/SearchBar/searchBar';
import usePokemonSearch from 'hooks/usePokemonSearch';

const Main = () => {
  const [query, setQuery] = useState<string>('');
  const { pokemon, loading, error } = usePokemonSearch({ query });

  return (
    <main>
      <Header />
      <SearchBar query={query} setQuery={setQuery} />
      {pokemon?.name}
      {loading && <Loading />}
      {error && <ErrorMessage />}
    </main>
  );
};

export default Main;
