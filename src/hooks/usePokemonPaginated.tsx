import React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    const resp = await pokemonApi.get(nextPageUrl.current);
  };
};
