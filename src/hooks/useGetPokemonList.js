import { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../api";

export default function useGetPokemonList() {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");

  const getPokemonListFromApi = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getPokemonList();
      setPokemonList(data.results);
    } catch (error) {
      setError(error.response.data);
    }
    setLoading(false);
  }, []);

  useEffect(() => getPokemonListFromApi(), [ getPokemonListFromApi ]);

  return {
    pokemonList,
    loading,
    error
  };
}

