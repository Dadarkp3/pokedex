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

      handleInputChange(event, setSearchTerm);

      expect(setSearchTerm).toHaveBeenCalledWith('Pikachu');
    });
  });

  describe('handleKeyUp', () => {
    it('should call setQuery with searchTerm when Enter is pressed', () => {
      const setQuery = jest.fn();
      const searchTerm = 'Pikachu';
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const event = {
        key: 'Enter',
      } as KeyboardEvent<HTMLInputElement>;

      handleKeyUp(event, setQuery, searchTerm);

      expect(setQuery).toHaveBeenCalledWith('Pikachu');
    });

    it('should not call setQuery when key is not Enter', () => {
      const setQuery = jest.fn();
      const searchTerm = 'Pikachu';
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const event = {
        key: 'Escape',
      } as KeyboardEvent<HTMLInputElement>;

      handleKeyUp(event, setQuery, searchTerm);

      expect(setQuery).not.toHaveBeenCalled();
    });
  });
});
