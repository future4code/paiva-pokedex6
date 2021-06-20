import React from "react";
import { Card, Buttons } from "./Styled";
import { goToDetails } from "../../routes/coodinator";
import { useHistory } from "react-router-dom";
import usePokedex from "../../hooks/usePokedex";

export default function PokeCard(props) {
  const history = useHistory();
  const { inPokedex, togglePokedex } = usePokedex(props.pokemon.name);

  function details(event) {
    event.stopPropagation();
    goToDetails(history, props.pokemon.id);
  }

  return (
    <Card onClick={details}>
      <img
        src={props.pokemon.sprites.other["official-artwork"].front_default}
        alt={props.pokemon.name}
      />
      <p>{props.pokemon.name}</p>
      <Buttons>
        <button onClick={togglePokedex}>
          {inPokedex ? "Remover" : "Adicionar"}
        </button>
        <button onClick={details}>
          Ver Detalhes
        </button>
      </Buttons>
    </Card>
  );
}
