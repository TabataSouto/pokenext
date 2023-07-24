import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

interface CardProps {
  pokemon: { name: string; id: number };
}

const Card = ({ pokemon }: CardProps) => {
  const url = "https://veekun.com/dex/media/pokemon/dream-world/";

  return (
    <div className={styles.card}>
      <Image
        src={`${url}${pokemon.id}.svg`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>
        Detalhes
      </Link>
    </div>
  );
};

export default Card;
