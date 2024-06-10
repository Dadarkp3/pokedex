import Image from 'next/image';

import { SmallScreenProps } from 'models/PokedexAppModels';

import styles from './smallScreen.module.scss';
import Loading from '../Loading/loading';

const SmallScreen = ({ pokemon, loading }: SmallScreenProps) => {
  return (
    <div className={styles.pokedexScreen}>
      <div className={styles.screenTop}>
        <div className={styles.screenLights}></div>
        <div className={styles.screenLights}></div>
      </div>
      <div className={styles.imageContainer}>
        {pokemon && (
          <Image
            src={
              pokemon.sprites?.other?.showdown?.front_default ||
              pokemon.sprites?.other['official-artwork']?.front_default
            }
            alt="Picture of the author"
            sizes="100vw"
            width={100}
            height={100}
            className={styles.pokemonImage}
          />
        )}
        {loading && <Loading />}
      </div>
      <div className={styles.screenBottom}>
        <div className={styles.screenButton}></div>
        <div className={styles.screenVents}>
          <div className={styles.vents}></div>
          <div className={styles.vents}></div>
          <div className={styles.vents}></div>
          <div className={styles.vents}></div>
        </div>
      </div>
    </div>
  );
};

export default SmallScreen;
