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
  if (e.key === 'Enter' && query != searchTerm.toLowerCase()) {
    setQuery(searchTerm.toLowerCase());
  }
};
