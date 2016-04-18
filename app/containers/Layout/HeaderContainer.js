import { connect } from 'react-redux';
import Header from '../../components/Layout/Header';

const getFullName = (auth) => {
  console.log(document.cookie, "hello");
  if (!auth.isAuthenticated) return "";
  else return auth.user.firstName + " " + auth.user.lastName;
};

const mapStateToProps = (state, ownProps) => {
  return {
    name: getFullName(state.authenication)
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;
