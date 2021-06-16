import { useEffect, useState } from "react";
import { getPokemonList } from "../api";

export default function useGetPokemonList() {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");

  function getPokemonListFromApi() {
    setLoading(true);

    getPokemonList()
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        setError(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => getPokemonListFromApi(), []);

  return {
    pokemonList,
    loading,
    error
  };
}

