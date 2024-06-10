export type PokemonResponseList = {
  name: string;
  url: string;
};

export type PokemonPage = {
  count: number;
  results: PokemonResponseList[];
  next: string | null;
  previous: string | null;
};

export type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
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
      showdown: {
        front_default: string;
      };
    };
  };
};
