import Dashboards from '../../components/Dashboards/Dashboards';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false,
    data: state.Dashboards.CostOverTime.graphData.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => dispatch(actions.dashboardActions.getTotalsData())
  };
};

const DashboardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboards);

export default DashboardsContainer;
