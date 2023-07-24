import { useState, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import { requestAll } from "../utils/api";
import { IPokeAPI } from "@/interfaces/IPokeAPI";
import Card from "@/components/Card";

// chama os dados de uma API
export const getStaticProps = async () => {
  const data = await requestAll();

  data.results.forEach((item: { id: number }, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

interface HomeProps {
  pokemons: IPokeAPI[];
}

const Home = ({ pokemons }: HomeProps) => {
  const [fill, setFill] = useState(pokemons);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFill(pokemons.filter((item) => item.name.toLowerCase().includes(value)));
  };

  return (
    <>
      <div className={styles.title_container}>
        <div>
          <form autoFocus>
            <input
              type="text"
              name="search"
              placeholder="Encontre seu Pokémon favorito"
              onChange={handleChange}
            />
          </form>
        </div>
        <div>
          <h1 className={styles.title}>
            Poke<span>Next</span>
          </h1>
          <Image
            src="/images/pokeball.png"
            width={50}
            height={50}
            alt="PokeNext"
          />
        </div>
      </div>
      <div className={styles.pokemon_container}>
        {fill.map((pokemon: IPokeAPI) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Home;
