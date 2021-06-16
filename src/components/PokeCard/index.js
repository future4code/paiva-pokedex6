import React from "react";
import {Card, Info, Buttons } from './Styled'
import useGetPokemon from '../../hooks/useGetPokemon'
import { goToDetails } from "../../routes/coodinator";
import { useHistory} from "react-router-dom";
import { useGlobalSetters, useGlobalStates } from "../../global/GlobalState";


export default function PokeCard(props) {
  const history = useHistory()
  const { pokemon } = useGetPokemon(props.pokemon.name);
  const { setPokedex } = useGlobalSetters();
  const { pokedex } = useGlobalStates()
  const find = pokedex.find((pokedexPokemon) => pokedexPokemon === props.pokemon)

  function togglePokedex() {
    let newPokedex = []

    if( find ){
      newPokedex = pokedex.filter((pokedexPokemon) => !(pokedexPokemon === props.pokemon))
    } else {
      newPokedex = [...pokedex, props.pokemon]
    }

    setPokedex(newPokedex)
  }

  return (
    <Card>
      <Info>
      <p>{props.pokemon.name}</p>
      <img 
      src={pokemon.sprites?.other['official-artwork'].front_default}
      alt={props.pokemon.name} />
      </Info>
      <Buttons>
      <button onClick={togglePokedex}>
        {find ? "Remover" : "Adicionar"}
      </button>
      <button onClick={()=>goToDetails(history, props.pokemon.name)}>
        Ver Detalhes
      </button>
      </Buttons>
    </Card>
  );
}
