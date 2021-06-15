import { useCallback, useEffect, useState } from "react";
import { getPokemon } from "../api";

export default function useGetPokemon(pokemonID) {
  const [ pokemon, setPokemon ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");

  const getPokemonFromApi = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getPokemon(pokemonID);
      setPokemon(data);
    } catch (error) {
      setError(error.response.data);
    }
    setLoading(false);
  }, [ pokemonID ]);

  useEffect(() => getPokemonFromApi(), [ getPokemonFromApi ]);

  return {
    pokemon,
    loading,
    error
  };
}
