import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import i18n from '../../i18n';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(
  (Layout)
);
