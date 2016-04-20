import LineGraph from '../../../components/Dashboards/Graphs/LineGraph';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { groupByYear } from '../../../utils/date.js';
import { min, max } from 'lodash';

const TEST_DATA = [
	{x: 2011, y: 3943},
	{x: 2012, y: 2342},
	{x: 2013, y: 2434},
	{x: 2014, y: 1111},
	{x: 2015, y: 39384},
	{x: 2016, y: 23432},
	{x: 2017, y: 2344532}
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
