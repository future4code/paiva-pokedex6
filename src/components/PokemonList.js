import React from "react";
import PokeCard from "./PokeCard";
import { useGlobalStates } from "../global/GlobalState";

export default function PokemonList() {

  const { pokemonList, error, loading} = useGlobalStates();

  if (loading)
    return <p>Carregando A Lista De Pokémons</p>;

  if (error)
    return <p>Parece Que Não Foi Possível Fazer A Listagem</p>;

  return (
    <>
      {pokemonList
        .map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
    </>
  );
}
