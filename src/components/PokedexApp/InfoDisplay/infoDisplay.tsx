import ErrorMessage from 'components/PokedexApp/ErrorMessage/errorMessage';
import { InfoDisplayProps } from 'models/PokedexAppModels';

import styles from './infoDisplay.module.scss';

const InfoDisplay = ({ pokemon, loading, error }: InfoDisplayProps) => (
  <div className={styles.infoDisplay}>
    {error && <ErrorMessage />}
    {pokemon && !loading && !error && <div>{pokemon.name}</div>}
  </div>
);

export default InfoDisplay;
