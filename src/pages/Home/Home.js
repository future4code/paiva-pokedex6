import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard.js";
import { Main } from './Styled'

// const pokemons = [
//   {
//     name: "bulbasaur",
//     url:  "https://pokeapi.co/api/v2/pokemon/1/"
//   },
//   {
//     name: "ivysaur",
//     url:  "https://pokeapi.co/api/v2/pokemon/2/"
//   },
//   {
//     name: "venusaur",
//     url:  "https://pokeapi.co/api/v2/pokemon/3/"
//   },
//   {
//     name: "charmander",
//     url:  "https://pokeapi.co/api/v2/pokemon/4/"
//   },
//   {
//     name: "charmeleon",
//     url:  "https://pokeapi.co/api/v2/pokemon/5/"
//   },
//   {
//     name: "charizard",
//     url:  "https://pokeapi.co/api/v2/pokemon/6/"
//   },
//   {
//     name: "squirtle",
//     url:  "https://pokeapi.co/api/v2/pokemon/7/"
//   },
//   {
//     name: "wartortle",
//     url:  "https://pokeapi.co/api/v2/pokemon/8/"
//   },
//   {
//     name: "blastoise",
//     url:  "https://pokeapi.co/api/v2/pokemon/9/"
//   },
//   {
//     name: "caterpie",
//     url:  "https://pokeapi.co/api/v2/pokemon/10/"
//   },
//   {
//     name: "metapod",
//     url:  "https://pokeapi.co/api/v2/pokemon/11/"
//   },
//   {
//     name: "butterfree",
//     url:  "https://pokeapi.co/api/v2/pokemon/12/"
//   },
//   {
//     name: "weedle",
//     url:  "https://pokeapi.co/api/v2/pokemon/13/"
//   },
//   {
//     name: "kakuna",
//     url:  "https://pokeapi.co/api/v2/pokemon/14/"
//   },
//   {
//     name: "beedrill",
//     url:  "https://pokeapi.co/api/v2/pokemon/15/"
//   },
//   {
//     name: "pidgey",
//     url:  "https://pokeapi.co/api/v2/pokemon/16/"
//   },
//   {
//     name: "pidgeotto",
//     url:  "https://pokeapi.co/api/v2/pokemon/17/"
//   },
//   {
//     name: "pidgeot",
//     url:  "https://pokeapi.co/api/v2/pokemon/18/"
//   },
//   {
//     name: "rattata",
//     url:  "https://pokeapi.co/api/v2/pokemon/19/"
//   },
//   {
//     name: "raticate",
//     url:  "https://pokeapi.co/api/v2/pokemon/20/"
//   },
//   {
//     name: "spearow",
//     url:  "https://pokeapi.co/api/v2/pokemon/21/"
//   },
//   {
//     name: "fearow",
//     url:  "https://pokeapi.co/api/v2/pokemon/22/"
//   },
//   {
//     name: "ekans",
//     url:  "https://pokeapi.co/api/v2/pokemon/23/"
//   },
//   {
//     name: "arbok",
//     url:  "https://pokeapi.co/api/v2/pokemon/24/"
//   },
//   {
//     name: "pikachu",
//     url:  "https://pokeapi.co/api/v2/pokemon/25/"
//   },
//   {
//     name: "raichu",
//     url:  "https://pokeapi.co/api/v2/pokemon/26/"
//   },
//   {
//     name: "sandshrew",
//     url:  "https://pokeapi.co/api/v2/pokemon/27/"
//   },
//   {
//     name: "sandslash",
//     url:  "https://pokeapi.co/api/v2/pokemon/28/"
//   },
//   {
//     name: "nidoran-f",
//     url:  "https://pokeapi.co/api/v2/pokemon/29/"
//   },
//   {
//     name: "nidorina",
//     url:  "https://pokeapi.co/api/v2/pokemon/30/"
//   }
// ];

export default function Home() {
  const [pokemonsList, setPokemonsList] = useState([])
  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        console.log(res.data.results)
        setPokemonsList(res.data.results)
      })
      .catch((err) => {
        console.log(err)  
      })
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <header>
        <button>Pokedex</button>
        <p>Lista De Pokemons</p>
      </header>
      <Main>
        {pokemonsList && pokemonsList.map((pokemon) => {
          return <PokeCard key={pokemon.name} pokemon={pokemon} />
        })}
      </Main>
    </>
  );
}
