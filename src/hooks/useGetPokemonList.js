import { useEffect, useState } from "react";
import { getPokemon, getPokemonList } from "../api";

export default function useGetPokemonList() {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");
  const [ pokemonErrors, setPokemonErrors ] = useState([]);

  async function getPokemonListFromApi() {
    try {
      setLoading(true);

      const pokemonNames = (await getPokemonList()).data.results;

      const pokemons = (await Promise.all(pokemonNames.map(async (pokemon) => {
        try {
          return (await getPokemon(pokemon.name)).data;
        } catch (error) {
          setPokemonErrors((errors) => [ ...errors, error ]);
        }
      })))
        .filter((pokemon) => pokemon);

      setPokemonList(pokemons);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => getPokemonListFromApi(), []);

  return {
    pokemonList,
    loading,
    error,
    pokemonErrors
  };
}

