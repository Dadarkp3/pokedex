import { HandleInputChangeProps, handleKeyUpProps } from 'models/UtilsModels';

export const handleInputChange = ({
  e,
  setSearchTerm,
}: HandleInputChangeProps) => {
  setSearchTerm(e.target.value);
};

export const handleKeyUp = ({
  e,
  setQuery,
  searchTerm,
  query,
}: handleKeyUpProps) => {
  if (e.key === 'Enter' && validateQuery(query, searchTerm)) {
    setQuery(searchTerm.toLowerCase());
  }
};

export const validateQuery = (query: string, searchTerm: string) => {
  return query != searchTerm.toLowerCase();
};
