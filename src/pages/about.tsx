import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <main className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        A Pokeédex é uma enciclopédia virtual que detém todas as espécies de
        pokémon. Projeto realizado para aprendizado do framework NextJs.
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      />
    </main>
  );
};

export default About;
