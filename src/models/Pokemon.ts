export interface PokemonResponseList {
  name: string;
  url: string;
}

export interface PokemonPage {
  count: number;
  results: PokemonResponseList[];
  next: string | null;
  previous: string | null;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  weight: number;
  height: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
