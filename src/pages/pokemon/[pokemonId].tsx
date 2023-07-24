import { IPokeAPI } from "@/interfaces/IPokeAPI";
import { requestAll, requestId } from "../../utils/api";

import Image from "next/image";

import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const data = await requestAll();

  // params
  const paths = data.results.map((_pokemon: IPokeAPI, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

//  com o contexto extraimos o ID da página pra carregar o dado de forma individual
export const getStaticProps = async (context: any) => {
  const id = context.params.pokemonId;
  const data = await requestId(id);
  return {
    props: { pokemon: data },
  };
};

interface Pokemon extends IPokeAPI {
  types: Array<{ type: { name: string } }>;
  height: number;
  weight: number;
}

interface PokemonProps {
  pokemon: Pokemon;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  const url = "https://veekun.com/dex/media/pokemon/dream-world/";

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`${url}${pokemon.id}.svg`}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map(({ type }, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles[`type_${type.name}`]}`}
            >
              {type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
