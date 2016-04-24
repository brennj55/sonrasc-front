import Dashboards from '../../components/Dashboards/Dashboards';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const TEST_DATA = [
	{x: new Date(2011, 1, 1).getTime(), y: 3943},
	{x: new Date(2012, 1, 1).getTime(), y: 2342},
	{x: new Date(2013, 1, 1).getTime(), y: 2434},
	{x: new Date(2014, 1, 1).getTime(), y: 1111},
	{x: new Date(2015, 1, 1).getTime(), y: 39384},
	{x: new Date(2016, 1, 1).getTime(), y: 23432},
	{x: new Date(2017, 1, 1).getTime(), y: 2344532}
];

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false,
    data: TEST_DATA
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => 2
  };
};

const DashboardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboards);

export default DashboardsContainer;
