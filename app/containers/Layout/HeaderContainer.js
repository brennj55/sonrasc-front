import { connect } from 'react-redux';
import Header from '../../components/Layout/Header';

const getFullName = (auth) => {
  if (auth.user) {
    console.log(auth.user.firstName + " " + auth.user.lastName);
    return auth.user.firstName + " " + auth.user.lastName;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.authenication.isAuthenticated,
    name: getFullName(state.authenication)
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;
