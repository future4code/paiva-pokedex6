import React from "react";
import { useHistory } from "react-router";
import PokeCard from "../../components/PokeCard";
import { useGlobalStates } from "../../global/GlobalState";
import { goToHome } from "../../routes/coodinator";
import { Header, Main } from "./Styled";

export default function Pokedex() {
  const history = useHistory();
  const { pokedex } = useGlobalStates();

  return (
    <>
      <Header>
        <button onClick={() => goToHome(history)}>Pokémons</button>
        <h1>Pokedex</h1>
      </Header>
      <Main>
        {pokedex
          .sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id)
          .map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
      </Main>
    </>
  );
}
