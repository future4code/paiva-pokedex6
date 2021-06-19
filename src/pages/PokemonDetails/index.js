import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails";
import usePokedex from "../../hooks/usePokedex";
import { goBack } from "../../routes/coodinator";
import { DetailsMain, Header } from "./Styled";

export default function Details() {
  const { id } = useParams();
  const [ name, setName ] = useState("");
  const history = useHistory();
  const { inPokedex, togglePokedex } = usePokedex(name);

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
        <PokemonDetails id={id} setName={setName}/>
      </DetailsMain>
    </>
  );
}
