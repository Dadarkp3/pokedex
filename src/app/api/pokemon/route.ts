import { LRUCache } from 'lru-cache';
import { NextRequest, NextResponse } from 'next/server';

const POKEAPI = 'https://pokeapi.co/api/v2/pokemon/';

const options = {
  max: 500,
  ttl: 1000 * 60 * 5,
  allowStale: false,
  updateAgeOnGet: true,
  updateAgeOnHas: false,
};

const cache = new LRUCache(options);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');

  const cachedPokemon = cache.get(name as string);
  if (cachedPokemon) {
    return NextResponse.json({ data: cachedPokemon }, { status: 200 });
  }

  const res = await fetch(`${POKEAPI}${name}`, {});

  if (res.ok) {
    const data = await res.json();
    cache.set(name as string, data);
    return NextResponse.json({ data }, { status: 200 });
  } else {
    throw new Error('Falha ao buscar os dados do Pokémon');
  }
}
