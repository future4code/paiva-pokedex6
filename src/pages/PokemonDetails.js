import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetail";

export default function Details() {
  const { id } = useParams();
  const [ name, setName ] = useState("");

  return (
    <>
      <header>
        <button>
          voltar
        </button>
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
