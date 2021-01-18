import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeView from './HomeView';

export default class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <HomeView history={history} />
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({}).isRequired
};
