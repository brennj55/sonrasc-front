import { connect } from 'react-redux';
import Nav from '../../components/Layout/Nav';

const mapStateToProps = (state, ownProps) => {
  return {
    open: true
  };
};

const NavContainer = connect(
  mapStateToProps
)(Nav);

export default NavContainer;
