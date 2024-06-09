import styles from './errorMessage.module.scss';

const ErrorMessage = () => (
  <div className={styles.container}>
    <h4>Pokemon não encontrado...</h4>
  </div>
);

export default ErrorMessage;
