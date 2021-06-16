import React, { useEffect } from "react";
import useGetPokemon from "../hooks/useGetPokemon";

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
      <section>
        <img alt={`${name} frente`} src={sprites.front_default}/>
        <img alt={`${name} trás`} src={sprites.back_default}/>
      </section>
      <section>
        <h2>Estatísticas</h2>
        {stats.map((stat) => (
          <p key={stat.stat.name}>
            {`${stat.stat.name}: ${stat.base_stat}`}
          </p>
        ))}
      </section>
      <section>
        <article>
          <h2>Tipos</h2>
          {types.map((type) => <p key={type.slot}>{type.type.name}</p>)}
        </article>

        <article>
          <h2>Movimentos</h2>
          {moves.map(({ move }) => <p key={move.url}>{move.name}</p>)}
        </article>
      </section>
    </>
  );
}
