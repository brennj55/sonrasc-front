import LineGraph from '../../../components/Dashboards/Graphs/LineGraph';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { groupByYear } from '../../../utils/date.js';
import { min, max } from 'lodash';

const TEST_DATA = [
	{x: new Date(2011, 1, 1).getTime(), y: 3943},
	{x: new Date(2012, 1, 1).getTime(), y: 2342},
	{x: new Date(2013, 1, 1).getTime(), y: 2434},
	{x: new Date(2014, 1, 1).getTime(), y: 1111},
	{x: new Date(2015, 1, 1).getTime(), y: 39384},
	{x: new Date(2016, 1, 1).getTime(), y: 23432},
	{x: new Date(2017, 1, 1).getTime(), y: 2344532}
];

const getGraphData = (state, ownProps) => {
	return {
		labels: state.Dashboards.CostOverTime.graphData.labels,
		datasets: [
			{
				label: "My Second dataset",
				fillColor: "rgba(0,0,0,0.0)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: state.Dashboards.CostOverTime.graphData.data
			}
		]
	}
};

const init = (dispatch, graphType) => {
	let xs = TEST_DATA.map(d => d.x);
	let minLabel = min(xs);
	let maxLabel = max(xs);
	dispatch(actions.dashboardActions.setGraphType(graphType));
	dispatch(actions.dashboardActions.setGraphData(TEST_DATA, graphType));
	dispatch(actions.dashboardActions.initSliderValues(minLabel, maxLabel, graphType));
	dispatch(actions.dashboardActions.setSliderValues(minLabel, maxLabel, graphType));
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: getGraphData(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: (type) => init(dispatch, type)
  };
};

const LineGraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LineGraph);

export default LineGraphContainer;
