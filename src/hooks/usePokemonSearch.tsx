import { useState, useCallback, useEffect } from 'react';

import { fetchPokemonMock } from 'lib/utils/hooksUtils';
import { Pokemon } from 'models/PokemonModels';
import { UsePokemonSearchProps } from 'models/usePokemonSearchModels';

const usePokemonSearch = ({ query }: UsePokemonSearchProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [oldQuery, setOldQuery] = useState<string | null>(null);

  const fetchPokemon = useCallback(async () => {
    if (!query || oldQuery == query) return;

    setLoading(true);
    setError(false);
    setOldQuery(query);
    try {
      const response = await fetchPokemonMock(query);
      if (!response) {
        setError(true);
        setPokemon(null);
        return;
      }
      const data: Pokemon = await response;
      setPokemon(data);
      setError(false);
    } catch (err) {
      setError(true);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }, [query, oldQuery]);

  useEffect(() => {
    fetchPokemon();
    return () => {
      setPokemon(null);
    };
  }, [fetchPokemon]);

  return { pokemon, loading, error };
};

export default usePokemonSearch;
