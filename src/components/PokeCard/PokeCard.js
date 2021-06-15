import React from "react";
import {Card, Info, Buttons } from './Styled'

export default function PokeCard(props) {
  return (
    <Card>
      <Info>
      <p>{props.pokemon.name}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt={props.pokemon.name} />
      </Info>
      <Buttons>
      <button>
        Adicionar/Remover
      </button>
      <button>
        Ver Detalhes
      </button>
      </Buttons>
    </Card>
  );
}
