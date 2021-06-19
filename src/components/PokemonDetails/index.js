import React, { useEffect } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import {
  Images,
  SectionStats,
  ArticleTypes,
  ArticleMovs,
  SectionInfo
} from "./Styled";

export default function PokemonDetails(props) {
  const { pokemon, loading, error } = useGetPokemon(props.id);

  useEffect(() => props.setName(pokemon.name), [ pokemon, props ]);

  if (loading)
    return <p>Carregando O Pokémon</p>;
  if (error)
    if (error === "Not Found")
      return <p>Pokémon Não Encontrado</p>;
    else
      return <p>Ocorreu Um Erro Ao Ver Os Detalhes</p>;

  const {
    name, sprites, stats, types, moves
  } = pokemon;

  return (
    <>
      <Images>
        <img alt={`${name} frente`} src={sprites.front_default}/>
        <img alt={`${name} trás`} src={sprites.back_default}/>
      </Images>
      <SectionStats>
        <h2>Estatísticas</h2>
        {stats.map((stat) => (
          <article key={stat.id}>
            <h3>{stat.stat.name}</h3>
            <p>{stat.base_stat}</p>
          </article>
        ))}
      </SectionStats>
      <SectionInfo>
        <h2>Tipos</h2>
        <ArticleTypes>
          {types.map((type) => <p key={type.slot}>{type.type.name}</p>)}
        </ArticleTypes>

        <h2>Movimentos</h2>
        <ArticleMovs>
          {moves.map(({ move }) => <p key={move.url}>{move.name}</p>)}
        </ArticleMovs>
      </SectionInfo>
    </>
  );
}
