import { connect } from 'react-redux';
import Nav from '../../components/Layout/Nav';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.navigationMenu.open && state.Authenication.loggedIn.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogoutClick: () => dispatch(actions.loginActions.logoutUser())
  };
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
