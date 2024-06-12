import { useState, useCallback, useEffect } from 'react';

import { Pokemon } from 'models/PokemonModels';
import { UsePokemonSearchProps } from 'models/PokemonSearchModels';

const usePokemonSearch = ({ query }: UsePokemonSearchProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchPokemon = useCallback(async () => {
    if (!query) return;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`api/pokemon?name=${query}`);
      const { data } = await response.json();
      setPokemon(data);
      setError(false);
    } catch (err) {
      setError(true);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchPokemon();
    return () => {
      setPokemon(null);
    };
  }, [fetchPokemon]);

  return { pokemon, loading, error };
};

export default usePokemonSearch;
