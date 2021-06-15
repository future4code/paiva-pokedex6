import React from "react";

export default function PokeCard(props) {
  return (
    <article>
      <img alt={props.name} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"/>
      <button>
        Adicionar/Remover
      </button>
      <button>
        Ver Detalhes
      </button>
    </article>
  );
}
