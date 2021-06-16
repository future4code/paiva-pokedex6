import React, { useContext } from "react";
import PokeCard from "./PokeCard";
import useGetPokemonList from "../hooks/useGetPokemonList";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { GlobalState, useGlobalSetters, useGlobalStates } from "../global/GlobalState";

export default function PokemonList() {

  const { pokemonList, error, loading, pokedex} = useGlobalStates();
  console.log(pokedex)

  if (loading)
    return <p>Carregando A Lista De Pokémons</p>;

  if (error)
    return <p>Parece Que Não Foi Possível Fazer A Listagem</p>;

  return (
    <>
      {pokemonList
        .filter((pokemon) => !pokedex.find((pokemonPodex) => pokemonPodex === pokemon))
        .map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
    </>
  );
}
