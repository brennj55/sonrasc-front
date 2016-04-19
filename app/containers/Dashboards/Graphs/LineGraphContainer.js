import LineGraph from '../../../components/Dashboards/Graphs/LineGraph';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { groupByYear } from '../../../utils/date.js';

const getGraphData = (state, ownProps) => { return {
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
}};

const mapStateToProps = (state, ownProps) => {
	console.log(state.Dashboards.CostOverTime);
  return {
    data: getGraphData(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: (type) => dispatch(actions.dashboardActions.setGraphType(type))
  };
};

const LineGraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LineGraph);

export default LineGraphContainer;
