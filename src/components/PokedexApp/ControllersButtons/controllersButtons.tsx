import styles from './controllersButtons.module.scss';

const ControllersButtons = () => (
  <div className={styles.controllers}>
    <div className={styles.controlsButton}></div>
    <div
      className={styles.controlsLongButton}
      style={{ backgroundColor: 'red' }}
    ></div>
    <div
      className={styles.controlsLongButton}
      style={{ backgroundColor: 'green' }}
    ></div>
  </div>
);

export default ControllersButtons;
