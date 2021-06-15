import React from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetail";
import useGetPokemon from "../hooks/useGetPokemon";

export default function Details() {
  const { id } = useParams();
  const { pokemon, loading, error } = useGetPokemon(id);
  let show;

  if (loading)
    show = <p>Carregando o Pokémon</p>;
  else if (error)
    show = <p>Ocorreu um erro ao mostrar o Pokémon</p>;
  else
    show = <PokemonDetails pokemon={pokemon}/>;

  return (
    <>
      <header>
        <button>
          voltar
        </button>
        <h1>{pokemon.name || "Detalhes Do Pokémon"}</h1>
        <button>
          Adicionar/Remover
        </button>
      </header>
      <main>
        {show}
      </main>
    </>
  );
}
