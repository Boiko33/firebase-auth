import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SignUpView from './SignUpView';
import {
  changeAuthField as changeAuthFieldAction,
  signUpHandler as signUpHandlerAction,
  clearSignErrors as clearSignErrorsAction
} from '../../store/auth/actions';

class SignUp extends Component {
  render() {
    const {
      email,
      password,
      history,
      signErrors,
      actions: {
        changeField,
        signUpHandler,
        clearSignErrors
      }
    } = this.props;
    return (
      <SignUpView
        email={email}
        password={password}
        changeField={changeField}
        history={history}
        signUpHandler={signUpHandler}
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
    signUpHandler: signUpHandlerAction,
    clearSignErrors: clearSignErrorsAction
  }, dispatch)
});

SignUp.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
  signErrors: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({
    changeField: PropTypes.func,
    signUpHandler: PropTypes.func,
    clearSignErrors: PropTypes.func
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
