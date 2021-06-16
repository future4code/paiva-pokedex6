import React from "react";
import { useHistory } from "react-router";
import PokemonList from "../../components/PokemonList";
import { gotToPokedex } from "../../routes/coodinator";
import { Main, Header } from "./Styled";

export default function Home() {
  const history = useHistory();

  return (
    <>
      <Header>
        <button onClick={() => gotToPokedex(history)}>Pokedex</button>
        <p>Lista De Pokemons</p>
      </Header>
      <Main>
        <PokemonList/>
      </Main>
    </>
  );
}
