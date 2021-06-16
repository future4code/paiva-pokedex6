import React from "react";
import {Card, Info, Buttons } from './Styled'
import useGetPokemon from '../../hooks/useGetPokemon'
import { goToDetails } from "../../routes/coodinator";
import { useHistory, useParams } from "react-router-dom";
import { useGlobalSetters, useGlobalStates } from "../../global/GlobalState";


export default function PokeCard(props) {
  const pathParams = useParams()
  const history = useHistory()
  const { pokemon } = useGetPokemon(props.pokemon.name);
  const { setPokedex } = useGlobalSetters();
  const { pokedex } = useGlobalStates()

  function addPokedex() {
    setPokedex([...pokedex, props.pokemon])
  }

  return (
    <Card>
      <Info>
      <p>{props.pokemon.name}</p>
      <img 
      src={pokemon.sprites ?.front_default}
      alt={props.pokemon.name} />
      </Info>
      <Buttons>
      <button onClick={addPokedex}>
        Adicionar
      </button>
      <button onClick={()=>goToDetails(history, props.pokemon.name)}>
        Ver Detalhes
      </button>
      </Buttons>
    </Card>
  );
}
