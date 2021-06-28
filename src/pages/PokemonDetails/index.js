import React from "react";
import { useHistory, useParams } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails";
import { useGlobalStates } from "../../global/GlobalState";
import usePokedex from "../../hooks/usePokedex";
import { goBack } from "../../routes/coodinator";
import { DetailsMain, Header } from "./Styled";

export default function Details() {
  const history = useHistory();
  const { id } = useParams();
  const { pokemonList, loading } = useGlobalStates();
  const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id));
  const { name } = pokemon || {};
  const { inPokedex, togglePokedex } = usePokedex(pokemon?.name);

  return (
    <>
      <Header>
        <button onClick={() => goBack(history)}>voltar</button>
        <h1>{name || "Detalhes Do Pokémon"}</h1>
        <button onClick={togglePokedex} disabled={!name}>
          {inPokedex ? "Remover" : "Adicionar"}
        </button>
      </Header>
      <DetailsMain>
        {loading ? <p>Carregando Pokémon</p> : <PokemonDetails pokemon={pokemon}/> }
      </DetailsMain>
    </>
  );
}
