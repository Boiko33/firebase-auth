import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogInView from './LogInView';
import {
  changeAuthField as changeAuthFieldAction,
  logInHandler as logInHandlerAction,
  clearSignErrors as clearSignErrorsAction
} from '../../store/auth/actions';

class LogIn extends Component {
  render() {
    const {
      email,
      password,
      history,
      signErrors,
      actions: {
        changeField,
        logInHandler,
        clearSignErrors
      }
    } = this.props;
    return (
      <LogInView
        email={email}
        password={password}
        changeField={changeField}
        history={history}
        logInHandler={logInHandler}
        signErrors={signErrors}
        clearSignErrors={clearSignErrors}
      />
    );
  }
}

const mapStateToProps = ({
  auth: {
    authentication: { email, password },
    signErrors
  }
}) => ({
  email,
  password,
  signErrors
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    changeField: changeAuthFieldAction,
    logInHandler: logInHandlerAction,
    clearSignErrors: clearSignErrorsAction
  }, dispatch)
});

LogIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
  signErrors: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({
    changeField: PropTypes.func,
    logInHandler: PropTypes.func,
    clearSignErrors: PropTypes.func
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
