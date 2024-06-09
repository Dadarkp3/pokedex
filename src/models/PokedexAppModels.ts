import { Pokemon } from './PokemonModels';

export type SmallScreenProps = {
  pokemon: Pokemon | null;
  loading: boolean;
};

export type InfoDisplayProps = {
  pokemon: Pokemon | null;
  loading: boolean;
  error: boolean;
};
