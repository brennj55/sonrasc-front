import LineGraph from '../../../components/Dashboards/Graphs/LineGraph';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { groupByYear } from '../../../utils/date.js';
import { min, max } from 'lodash';
import moment from 'moment';

const getGraphData = (state, ownProps) => {
	return {
		labels: ownProps.data.map((d) => moment(d.x).locale('en-gb').format('L')),
		datasets: [
			{
				label: "My Second dataset",
				fillColor: "rgba(0,0,0,0.0)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: ownProps.data.map(d => d.y)
			}
		]
	}
};

const init = (dispatch, graphType, ownProps) => {
	let xs = ownProps.data.map(d => d.x);
	let minLabel = min(xs);
	let maxLabel = max(xs);
	dispatch(actions.dashboardActions.setGraphType(graphType));
	dispatch(actions.dashboardActions.setGraphData(ownProps.data, graphType));
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
    onInit: (type) => init(dispatch, type, ownProps)
  };
};

const LineGraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LineGraph);

export default LineGraphContainer;
