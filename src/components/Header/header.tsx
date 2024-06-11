import Image from 'next/image';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <Image
        src="/images/logo.png"
        width={500}
        height={500}
        alt="Logo icon"
        className={styles.image}
      />
      <h1 className={styles.title}>Pokedex Research</h1>
    </header>
  );
};

export default Header;
