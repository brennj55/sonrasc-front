import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => {
  return {
    navOpen: state.navigationMenu.open
  };
};

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
