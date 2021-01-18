import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from '../../../scss/components/pages/Home/Home.module.scss';
import fire from '../../../auth/fire';

const HomeView = ({ history }) => {
  const { t } = useTranslation();

  const handler = () => {
    fire.auth().signOut();
    history.push('/logIn');
  };

  return (
    <div className={styles.container}>
      <h1>{t('home')}</h1>
      <div className={styles.auth}>
        <button
          type="button"
          onClick={() => handler()}
        >
          {t('signOut')}
        </button>
      </div>
    </div>
  );
};

HomeView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default HomeView;
