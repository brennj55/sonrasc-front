import SpendingPerBusiness from '../../../components/Dashboards/Graphs/SpendingPerBusiness';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { groupByYear } from '../../../utils/date.js';
import moment from 'moment';

const randomColor = () => "#"+((1<<24)*Math.random()|0).toString(16);

const transformData = (data) => {
  if (!data) return {};
  return data.map(bsns => {
    return {
      value: bsns.sum,
      color: randomColor(),
      highlight: randomColor(),
      label: bsns.business
    };
  });
}

const init = (dispatch, graphType, ownProps) => {
  return dispatch(actions.dashboardActions.getPieChartData())
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: transformData(state.Dashboards.pieChart.data)
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
