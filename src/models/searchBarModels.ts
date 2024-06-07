import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}
