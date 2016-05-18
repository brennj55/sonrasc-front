import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Error from '../components/Layout/Error.js';

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(push("/"));
      }
    }

    render() {
      return (
        <div>
        {this.props.isAuthenticated === true
          ? <Component {...this.props}/>
          : <ErrorPage />
        }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.Authenication.loggedIn.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};
