import { renderHook } from '@testing-library/react';
import { act } from 'react';

import usePokemonSearch from 'hooks/usePokemonSearch';
import { pokemonMock } from 'lib/mocks/PokemonMock';
import { fetchPokemonMock } from 'lib/utils/hooksUtils';

jest.mock('lib/utils/hooksUtils', () => ({
  fetchPokemonMock: jest.fn(),
}));

describe('usePokemonSearch', () => {
  test('should render initial state and fetch pokemon on mount', async () => {
    const { result } = renderHook(() => usePokemonSearch(''));

    expect(result.current.pokemon).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe('');

    await act(async () => {});

    expect(result.current.pokemon).toEqual(null);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe('');
  });

  test('should render fetched pokemon on successful fetch', async () => {
    jest.mocked(fetchPokemonMock).mockResolvedValueOnce(pokemonMock);
    const { result } = renderHook(() => usePokemonSearch('Pikachu'));

    await act(async () => {});

    expect(result.current.pokemon).toEqual(pokemonMock);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe('');
    expect(fetchPokemonMock).toHaveBeenCalledTimes(1);
  });

  test('should render error on fetch error', async () => {
    const error = new Error('Network Error');
    jest.mocked(fetchPokemonMock).mockRejectedValueOnce(error);

    const { result } = renderHook(() => usePokemonSearch('Bulbasaur'));

    await act(async () => {});

    expect(result.current.pokemon).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe('Erro ao buscar o Pokémon');
  });

  test('should clear pokemon on unmount', async () => {
    const { result, unmount } = renderHook(() => usePokemonSearch(''));

    await act(async () => {});

    expect(result.current.pokemon).toBeNull();

    unmount();

    expect(result.current.pokemon).toBeNull();
  });

  test('should not find the correct pokemon', async () => {
    const { result } = renderHook(() => usePokemonSearch('pichachu'));
    console.log(result.current.error);

    await act(async () => {});
    expect(result.current.pokemon).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe(
      'Erro undefined: Pokémon não encontrado.',
    );
  });
});
