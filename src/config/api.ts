import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Pokemon = any;

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, { name: string; offset: number }>({
      query: (args) => `pokemon/${args.name}?limit=20&offset=${args.offset}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
