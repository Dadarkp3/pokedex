import { NextRequest, NextResponse } from 'next/server';

const POKEAPI = 'https://pokeapi.co/api/v2/pokemon/';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');
  const res = await fetch(`${POKEAPI}${name}`, {});

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } else {
    throw new Error('Falha ao buscar os dados do Pokémon');
  }
}
