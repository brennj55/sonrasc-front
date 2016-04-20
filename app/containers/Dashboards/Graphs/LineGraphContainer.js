import LineGraph from '../../../components/Dashboards/Graphs/LineGraph';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { groupByYear } from '../../../utils/date.js';
import { min, max } from 'lodash';

const TEST_DATA = [1, 2, 3, 4, 5, 6, 8, 9];
const LABEL_DATA = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

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
	let minLabel = min(LABEL_DATA);
	let maxLabel = max(LABEL_DATA);
	dispatch(actions.dashboardActions.setGraphType(graphType));
	dispatch(actions.dashboardActions.setGraphData(TEST_DATA, graphType));
	dispatch(actions.dashboardActions.setGraphLabels(LABEL_DATA, graphType));
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
