import SpendingPerBusiness from '../../../components/Dashboards/Graphs/SpendingPerBusiness';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { groupByYear } from '../../../utils/date.js';
import moment from 'moment';

const getGraphData = (state, ownProps) => {
	// console.log(state.Dashboards.CostOverTime.graphData.data);
	// let labels = state.Dashboards.CostOverTime.graphData.labels.map((d) => moment(d).locale('en-gb').format('L')) || {};
	// let data = state.Dashboards.CostOverTime.graphData.data;
	// console.log(labels, data, 'hello');
	// return {
	// 	labels: labels,
	// 	datasets: [
	// 		{
	// 			label: "My Second dataset",
	// 			fillColor: "rgba(0,0,0,0.0)",
	// 			strokeColor: "rgba(151,187,205,1)",
	// 			pointColor: "rgba(151,187,205,1)",
	// 			pointStrokeColor: "#fff",
	// 			pointHighlightFill: "#fff",
	// 			pointHighlightStroke: "rgba(151,187,205,1)",
	// 			data: data
	// 		}
	// 	]
	// }

  return [{
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
      },
      {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
      },
      {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
      }];
};

const init = (dispatch, graphType, ownProps) => {

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

const SpendingPerBusinessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendingPerBusiness);

export default SpendingPerBusinessContainer;
