import Dashboards from '../../components/Dashboards/Dashboards';
import { connect } from 'react-redux';
import * as actions from '../../actions';


const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => console.log("Dashboard me up scotty")
  };
};

const DashboardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboards);

export default DashboardsContainer;
