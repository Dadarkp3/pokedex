import { ChangeEvent, KeyboardEvent } from 'react';

import { handleInputChange, handleKeyUp } from '../searchUtils';

describe('utils', () => {
  describe('handleInputChange', () => {
    it('should update the search term', () => {
      const setSearchTerm = jest.fn();
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const event = {
        target: { value: 'Pikachu' },
      } as ChangeEvent<HTMLInputElement>;

      handleInputChange({ e: event, setSearchTerm });

      expect(setSearchTerm).toHaveBeenCalledWith('Pikachu');
    });
  });

  describe('handleKeyUp', () => {
    it('should call setQuery with searchTerm when Enter is pressed', () => {
      const setQuery = jest.fn();
      const searchTerm = 'Pikachu';
      const query = '';
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const event = {
        key: 'Enter',
      } as KeyboardEvent<HTMLInputElement>;

      handleKeyUp({ e: event, setQuery, searchTerm, query });

      expect(setQuery).toHaveBeenCalledWith('pikachu');
    });

    it('should not call setQuery when key is not Enter', () => {
      const setQuery = jest.fn();
      const searchTerm = 'Pikachu';
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const event = {
        key: 'Escape',
      } as KeyboardEvent<HTMLInputElement>;

      handleKeyUp({ e: event, setQuery, searchTerm, query: searchTerm });

      expect(setQuery).not.toHaveBeenCalled();
    });
  });
});
