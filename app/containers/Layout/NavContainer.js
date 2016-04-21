import { connect } from 'react-redux';
import Nav from '../../components/Layout/Nav';

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.navigationMenu.open && state.authenication.isAuthenticated
  };
};

const NavContainer = connect(
  mapStateToProps
)(Nav);

export default NavContainer;
