import { ChangeEvent, KeyboardEvent } from 'react';

import { pokemonMock } from 'lib/mocks/PokemonMock';
import { fetchPokemonMock } from 'lib/utils/hooksUtils';

import { handleInputChange, handleKeyUp } from '../searchUtils';

describe('utils', () => {
  describe('hooksUtils', () => {
    test('should resolve with pokemon data for matching name (case-insensitive)', async () => {
      const name = 'dItTo';
      const pokemon = await fetchPokemonMock(name);

      expect(pokemon).toEqual(pokemonMock);
    });

    test('should reject with error for non-matching name', async () => {
      const name = 'Bulbasaur';

      try {
        await fetchPokemonMock(name);
        fail('Expected error to be thrown');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        expect(error.message).toBe('Pokémon não encontrado'); // Might need additional checks
      }
    });

    // Optional test for empty name handling (adjust as needed)
    test('should handle empty name', async () => {
      try {
        await fetchPokemonMock('');
        fail('Expected error to be thrown'); // Adjust assertion if needed
      } catch (error) {
        expect(error).toBeInstanceOf(Error); // Generic error assertion
      }
    });
  });

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
