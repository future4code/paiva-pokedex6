import React from "react";
import { Card, Buttons } from "./Styled";
import useGetPokemon from "../../hooks/useGetPokemon";
import { goToDetails } from "../../routes/coodinator";
import { useHistory } from "react-router-dom";
import usePokedex from "../../hooks/usePokedex";

export default function PokeCard(props) {
  const history = useHistory();
  const { pokemon } = useGetPokemon(props.pokemon.name);
  const { inPokedex, togglePokedex } = usePokedex(props.pokemon.name);

  return (
    <Card>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={props.pokemon.name}
      />
      <p>{props.pokemon.name}</p>
      <Buttons>
        <button onClick={togglePokedex}>
          {inPokedex ? "Remover" : "Adicionar"}
        </button>
        <button onClick={() => goToDetails(history, props.pokemon.name)}>
          Ver Detalhes
        </button>
      </Buttons>
    </Card>
  );
}
