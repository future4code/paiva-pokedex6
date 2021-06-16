import axios from "axios";

const URL = " https://pokeapi.co/api/v2";

export function getPokemon(pokemonID) {
  return axios.get(`${URL}/pokemon/${pokemonID}`);
}

export function getPokemonList() {
  return axios.get(`${URL}/pokemon?limit=20`);
}
