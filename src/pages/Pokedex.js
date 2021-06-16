import React from "react";
import { useHistory } from "react-router";
import PokeCard from "../components/PokeCard";
import { useGlobalStates } from "../global/GlobalState";
import { goToHome } from "../routes/coodinator";

export default function Pokedex() {
  const history = useHistory();
  const {pokedex} = useGlobalStates();

  return (
    <>
      <header>
        <button onClick={() => goToHome(history)}>Lista De Pokemons</button>
        <p>Pokedex</p>
      </header>
      <main>
        {pokedex.map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon}/>)}
      </main>
    </>
  );
}
