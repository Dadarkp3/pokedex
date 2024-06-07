import { fireEvent, render } from '@testing-library/react';

import SearchBar from '../searchBar';

describe('SearchBar', () => {
  test('should render input with placeholder text', () => {
    const { getByPlaceholderText } = render(
      <SearchBar query="" setQuery={() => {}} />,
    );

    const input = getByPlaceholderText(/Digite o nome do Pokémon/i); // Case-insensitive match

    expect(input).toBeInTheDocument();
  });

  test('should update query state on input change', () => {
    const mockSetQuery = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar query="" setQuery={mockSetQuery} />,
    );

    const input = getByPlaceholderText(/Digite o nome do Pokémon/i);

    fireEvent.change(input, { target: { value: 'Pikachu' } });

    expect(mockSetQuery).toHaveBeenCalledTimes(1);
    expect(mockSetQuery).toHaveBeenCalledWith('Pikachu'); // Verify passed value
  });
});
