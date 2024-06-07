import { Pokemon } from 'models/PokemonModels';

export const pokemonMock: Pokemon = {
  height: 3,
  id: 132,
  name: 'ditto',
  sprites: {
    other: {
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
      },
    },
  },
  types: [
    {
      type: {
        name: 'normal',
      },
    },
  ],
  weight: 40,
};
