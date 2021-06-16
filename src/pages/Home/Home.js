import React from "react";
import PokemonList from "../../components/PokemonList";
import { Main, Header } from "./Styled";

export default function Home() {
  return (
    <>
      <Header>
        <button>Pokedex</button>
        <p>Lista De Pokemons</p>
      </Header>
      <Main>
        <PokemonList/>
      </Main>
    </>
  );
}
