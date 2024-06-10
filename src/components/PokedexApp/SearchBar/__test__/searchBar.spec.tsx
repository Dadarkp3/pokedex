import { render, screen, fireEvent } from '@testing-library/react';

import { SearchBarProps } from 'models/searchBarModels';

import SearchBar from '../searchBar';

describe('SearchBar', () => {
  const setup = (props: Partial<SearchBarProps> = {}) => {
    const defaultProps: SearchBarProps = {
      query: '',
      setQuery: jest.fn(),
      isLoading: false,
    };

    return render(<SearchBar {...defaultProps} {...props} />);
  };

  it('should render input with placeholder text', () => {
    setup();

    expect(
      screen.getByPlaceholderText('Digite o nome do Pokémon'),
    ).toBeInTheDocument();
  });

  it('should call setQuery when Enter key is pressed', () => {
    const setQuery = jest.fn();
    setup({ setQuery });

    const input = screen.getByPlaceholderText('Digite o nome do Pokémon');
    fireEvent.change(input, { target: { value: 'Pikachu' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    expect(setQuery).toHaveBeenCalledWith('Pikachu');
  });

  it('should not call setQuery when key is not Enter', () => {
    const setQuery = jest.fn();
    setup({ setQuery });

    const input = screen.getByPlaceholderText('Digite o nome do Pokémon');
    fireEvent.change(input, { target: { value: 'Pikachu' } });
    fireEvent.keyUp(input, { key: 'Escape', code: 'Escape' });

    expect(setQuery).not.toHaveBeenCalled();
  });
});
