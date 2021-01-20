import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home/Home';
import SignUp from './components/pages/SignUp/SignUp';
import LogIn from './components/pages/LogIn/LogIn';
import { identificateUser as identificateUserAction } from './components/store/auth/actions';

class App extends Component {
  componentDidMount() {
    const { identificateUser } = this.props;
    identificateUser();
  }

  render() {
    const {
      user,
    } = this.props;
    return (
      <Router>
        <Layout>
          <Switch>
            {user.uid ? (
              <>
                <Route exact path="/" component={Home} />
              </>
            ) : (
              <>
                <Route exact path="/" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
              </>
            )}
          </Switch>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = ({
  auth: { user }
}) => ({
  user
});

const mapDispatchToProps = {
  identificateUser: identificateUserAction
};

App.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string
  }).isRequired,
  identificateUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
