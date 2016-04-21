import Login from '../../components/Login/Login';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { push } from 'react-router-redux';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: (username, password) => dispatch(actions.loginActions.loginUser({ username, password })),
    onRegisterClick: () => dispatch(push('/register'))
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
