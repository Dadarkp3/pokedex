import { pokemonMock } from 'lib/mocks/PokemonMock';
import { Pokemon } from 'models/PokemonModels';

export const fetchPokemonMock = (name: string): Promise<Pokemon> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pokemonMock?.name === name.toLowerCase()) {
        resolve(pokemonMock);
      } else {
        reject(new Error('Pokémon não encontrado'));
      }
    }, 500);
  });
};
