import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../../components/Layout/Header';

const getFullName = (auth) => {
  if (auth.user) {
    return auth.user.firstName + " " + auth.user.lastName;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.Authenication.loggedIn.isAuthenticated,
    name: getFullName(state.Authenication.loggedIn)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMenuTouch: () => dispatch(actions.navigationMenuActions.toggleNavigation())
  };
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
