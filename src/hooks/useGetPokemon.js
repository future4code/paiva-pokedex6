import { useEffect, useState } from "react";
import { getPokemon } from "../api";

export default function useGetPokemon(pokemonID) {
  const [ pokemon, setPokemon ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");

  function getPokemonFromApi() {
    setLoading(true);

    getPokemon(pokemonID)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        setError(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => getPokemonFromApi(), []); /*eslint-disable-line max-len, react-hooks/exhaustive-deps*/

  return {
    pokemon,
    loading,
    error
  };
}
