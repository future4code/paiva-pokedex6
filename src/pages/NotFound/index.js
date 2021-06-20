import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome, gotToPokedex } from "../../routes/coodinator";
import { MainError, Header } from "./Styled";

export default function NotFound() {
  const history = useHistory();

  return (
    <>
      <Header>
        <button onClick={() => goToHome(history)}>
          Pokémons
        </button>
        <h1> Página Não Encontrada</h1>
        <button onClick={() => gotToPokedex(history)}>
          Pokedex
        </button>
      </Header>
      <MainError>
        <img
          src="https://media.giphy.com/media/HZpCCbcWc0a3u/giphy.gif"
          alt="Não Encontrado"
        />
      </MainError>
    </>
  );
}

