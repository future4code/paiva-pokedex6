import React from "react";
import PokeCard from "./PokeCard/PokeCard";
import useGetPokemonList from "../hooks/useGetPokemonList";

export default function PokemonList() {
  const {  pokemonList, error, loading } = useGetPokemonList();

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
