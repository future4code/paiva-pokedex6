import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetail";
import usePokedex from "../hooks/usePokedex";
import { goBack } from "../routes/coodinator";

export default function Details() {
  const { id } = useParams();
  const [ name, setName ] = useState("");
  const history = useHistory();
  const { inPokedex, togglePokedex } = usePokedex(name);

  return (
    <>
      <header>
        <button onClick={() => goBack(history)}>voltar</button>
        <h1>{name || "Detalhes Do Pokémon"}</h1>
        <button onClick={togglePokedex} disabled={!name}>
          {inPokedex ? "Remover" : "Adicionar"}
        </button>
      </header>
      <main>
        <PokemonDetails id={id} setName={setName}/>
      </main>
    </>
  );
}
