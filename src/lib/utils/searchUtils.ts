import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react';

export const handleInputChange = (
  e: ChangeEvent<HTMLInputElement>,
  setSearchTerm: Dispatch<SetStateAction<string>>,
) => {
  setSearchTerm(e.target.value);
};

export const handleKeyUp = (
  e: KeyboardEvent<HTMLInputElement>,
  setQuery: Dispatch<SetStateAction<string>>,
  searchTerm: string,
) => {
  if (e.key === 'Enter') {
    setQuery(searchTerm);
  }
};
