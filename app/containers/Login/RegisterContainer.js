import Register from '../../components/Login/Register';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Colors from 'material-ui/lib/styles/colors';

const isAvailable = (registration) => {
  if (registration.usernameAvailable === 1) return {
    text: "Username Available",
    style: {color: Colors.green500 }
  };

  else if (registration.usernameAvailable === -1) return {
    text: "Username Unavailable",
    style: {color: Colors.red500 }
  };

  else return {
    text: "",
    style: {}
  }
};

const mapStateToProps = (state, ownProps) => {
  const availablity = isAvailable(state.Authenication.registration);

  return {
    usernameFieldStyle: availablity.style,
    usernameText: availablity.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRegister: (user, pass, data) => dispatch(actions.registerActions.registerUser(user, pass, data)),
    onUsernameChange: (event) => dispatch(actions.registerActions.checkIfUsernameAvailable(event.target.value)),
    onValueChange: (event) => dispatch(actions.registerActions.resetField('username'))
  };
};

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;
