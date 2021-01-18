import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from '../../../scss/components/pages/Home/Home.module.scss';

const LogInView = ({
  email, password, changeField, history, logInHandler, signErrors, clearSignErrors
}) => {
  const { t } = useTranslation();

  const navigationHandler = () => {
    history.push('/signUp');
    clearSignErrors();
  };

  return (
    <div className={styles.container}>
      <h1>{t('logIn')}</h1>
      <form className={styles.auth}>
        <label htmlFor="email" className={styles.label}>
          {t('email')}
          <input
            id="email"
            value={email}
            placeholder={t('email')}
            onChange={({ target: { value } }) => changeField('email', value)}
            autoCapitalize="none"
            className={styles.authItems}
          />
          {signErrors.email.length > 0 && (
            <p className={styles.error}>{signErrors.email}</p>
          )}
        </label>
        <label htmlFor="password" className={styles.label}>
          {t('password')}
          <input
            placeholder={t('password')}
            id="password"
            value={password}
            onChange={({ target: { value } }) => changeField('password', value)}
            className={styles.authItems}
          />
          {signErrors.password.length > 0 && (
            <p className={styles.error}>{signErrors.password}</p>
          )}
        </label>
        <button
          type="submit"
          onClick={(event) => logInHandler(email, password, history, event)}
        >
          {t('logIn')}
        </button>
        <p>{t('noAccount')}</p>
        <button
          type="button"
          onClick={() => navigationHandler()}
        >
          {t('signUp')}
        </button>
      </form>
    </div>
  );
};

LogInView.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  logInHandler: PropTypes.func.isRequired,
  clearSignErrors: PropTypes.func.isRequired,
  signErrors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default LogInView;
