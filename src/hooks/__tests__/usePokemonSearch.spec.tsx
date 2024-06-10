import { renderHook } from '@testing-library/react';
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import { act } from 'react';

import usePokemonSearch from 'hooks/usePokemonSearch';
import { pokemonMock } from 'lib/mocks/PokemonMock';

describe('usePokemonSearch', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetch.resetMocks();
  });

  test('should render initial state and fetch pokemon on mount', async () => {
    const { result } = renderHook(() => usePokemonSearch({ query: '' }));

    expect(result.current.pokemon).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();

    await act(async () => {});

    expect(result.current.pokemon).toEqual(null);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
  });

  test('should render fetched pokemon on successful fetch', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: pokemonMock }));
    const { result } = renderHook(() => usePokemonSearch({ query: 'ditto' }));

    await act(async () => {});

    expect(result.current.pokemon).toEqual(pokemonMock);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe(false);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('should render error on fetch error', async () => {
    fetch.mockReject(() => Promise.reject('API is down'));

    const { result } = renderHook(() =>
      usePokemonSearch({ query: 'Bulbasaur' }),
    );

    await act(async () => {});

    expect(result.current.pokemon).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
  });

  test('should clear pokemon on unmount', async () => {
    const { result, unmount } = renderHook(() =>
      usePokemonSearch({ query: '' }),
    );

    await act(async () => {});

    expect(result.current.pokemon).toBeNull();

    unmount();

    expect(result.current.pokemon).toBeNull();
  });

  test('should not find the correct pokemon', async () => {
    const { result } = renderHook(() =>
      usePokemonSearch({ query: 'pichachu' }),
    );

    await act(async () => {});
    expect(result.current.pokemon).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
  });

  test('should not find the correct pokemon', async () => {
    fetch.mockReject(() => Promise.reject('API is down'));
    const { result } = renderHook(() =>
      usePokemonSearch({ query: 'pichachu' }),
    );

    await act(async () => {});
    expect(result.current.pokemon).toBeNull();
    expect(result.current.error).toBeTruthy();
  });
});
