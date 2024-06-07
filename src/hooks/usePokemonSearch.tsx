import { useState, useCallback, useEffect } from 'react';

import { fetchPokemonMock } from 'lib/utils/hooksUtils';
import { Pokemon } from 'models/PokemonModels';

const usePokemonSearch = (query: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchPokemon = useCallback(async () => {
    if (!query) return;

    setLoading(true);
    setError('');
    try {
      const response = await fetchPokemonMock(query);
      if (!response) {
        const message = `Erro ${response}: Pokémon não encontrado.`;
        setError(message);
        setPokemon(null);
        return;
      }
      const data: Pokemon = await response;
      setPokemon(data);
    } catch (err) {
      setError('Erro ao buscar o Pokémon');
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
