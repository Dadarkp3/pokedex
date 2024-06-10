import styles from './controllersButtons.module.scss';

const ControllersButtons = () => (
  <div className={styles.controllers}>
    <div className={styles.controlsButton}></div>
    <div
      className={styles.controlsLongButton}
      style={{ backgroundColor: '#cca142' }}
    ></div>
    <div
      className={styles.controlsLongButton}
      style={{ backgroundColor: '#cc6e42' }}
    ></div>
  </div>
);

export default ControllersButtons;
