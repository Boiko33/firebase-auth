import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from '../../../scss/components/pages/Home/Home.module.scss';

const SignUpView = ({
  email, password, changeField, history, signUpHandler, signErrors, clearSignErrors
}) => {
  const { t } = useTranslation();

  const navigationHandler = () => {
    history.push('/login');
    clearSignErrors();
  };

  return (
    <div className={styles.container}>
      <h1>{t('signUp')}</h1>
      <form className={styles.auth}>
        <label htmlFor="email" className={styles.label}>
          {t('email')}
          <input
            placeholder={t('email')}
            className={styles.authItems}
            type="text"
            id="email"
            value={email}
            onChange={({ target: { value } }) => changeField('email', value)}
          />
          {signErrors.email.length > 0 && (
            <p className={styles.error}>{signErrors.email}</p>
          )}
        </label>
        <label htmlFor="password" className={styles.label}>
          {t('password')}
          <input
            id="password"
            type="text"
            placeholder={t('password')}
            className={styles.authItems}
            value={password}
            onChange={({ target: { value } }) => changeField('password', value)}
          />
          {signErrors.password.length > 0 && (
            <p className={styles.error}>{signErrors.password}</p>
          )}
        </label>
        <button type="submit" onClick={(event) => signUpHandler(email, password, history, event)}>
          {t('signUp')}
        </button>
        <div>
          <p>{t('haveAccount')}</p>
          <button type="button" onClick={() => navigationHandler()}>
            {t('logIn')}
          </button>
        </div>
      </form>
    </div>
  );
};

SignUpView.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  signUpHandler: PropTypes.func.isRequired,
  clearSignErrors: PropTypes.func.isRequired,
  signErrors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({}),
  }).isRequired
};

export default SignUpView;
