import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

export type HandleInputChangeProps = {
  e: ChangeEvent<HTMLInputElement>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export type handleKeyUpProps = {
  e: KeyboardEvent<HTMLInputElement>;
  setQuery: Dispatch<SetStateAction<string>>;
  searchTerm: string;
  query: string;
};
