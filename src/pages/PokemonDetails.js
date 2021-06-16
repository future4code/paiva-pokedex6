import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetail";
import { goBack } from "../routes/coodinator";

export default function Details() {
  const { id } = useParams();
  const [ name, setName ] = useState("");
  const history = useHistory();

  return (
    <>
      <header>
        <button onClick={() => goBack(history)}>voltar</button>
        <h1>{name || "Detalhes Do Pokémon"}</h1>
        <button>
          Adicionar/Remover
        </button>
      </header>
      <main>
        <PokemonDetails id={id} setName={setName}/>
      </main>
    </>
  );
}
