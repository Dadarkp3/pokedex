import styles from './lights.module.scss';

const Lights = () => (
  <div className={styles.lightsContainer}>
    <div className={styles.bgLight}></div>
    <div className={styles.smallLightsContainer}>
      <div className={styles.smallLights}></div>
      <div className={styles.smallLights}></div>
      <div className={styles.smallLights}></div>
    </div>
  </div>
);

export default Lights;
