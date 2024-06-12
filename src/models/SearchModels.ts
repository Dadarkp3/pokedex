import { Dispatch, SetStateAction } from 'react';

export type SearchBarProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
};
