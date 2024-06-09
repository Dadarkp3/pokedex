'use client';

import PokedexApp from 'components/PokedexApp/pokedexApp';

import styles from './main.module.scss';

const Main = () => {
  return (
    <main className={styles.container}>
      <PokedexApp />
    </main>
  );
};

export default Main;
