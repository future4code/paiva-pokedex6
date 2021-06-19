import React from "react";
import { useHistory } from "react-router";
import PokeCard from "../components/PokeCard";
import { useGlobalStates } from "../global/GlobalState";
import { goToHome } from "../routes/coodinator";
import {Header, Main} from '../pages/Home/Styled'

export default function Pokedex() {
  const history = useHistory();
  const { pokedex } = useGlobalStates();

  return (
    <>
      <Header>
        <button onClick={() => goToHome(history)}>Lista De Pokemons</button>
        <p>Pokedex</p>
      </Header>
      <Main>
        {pokedex.map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
      </Main>
    </>
  );
}
