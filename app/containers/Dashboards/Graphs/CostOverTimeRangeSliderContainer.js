import RangeSlider from '../../../components/Fields/RangeSlider';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import moment from 'moment';

const handleSliderChange = (dispatch, ownProps, values) => {
  dispatch(actions.dashboardActions.setSliderValues(values.min, values.max, ownProps.graphType));
}

const filters = (component, values, dispatch, ownProps) => {
  dispatch(actions.dashboardActions.filterGraphData(values.min, values.max, ownProps.graphType));
  dispatch(actions.dashboardActions.filterPieChart(values.min, values.max));
};

const mapStateToProps = (state, ownProps) => {
  let values = state.Dashboards.CostOverTime.slider.values;
  return {
    maxValue: state.Dashboards.CostOverTime.slider.maxValue,
    minValue: state.Dashboards.CostOverTime.slider.minValue,
    disabled: state.Dashboards.CostOverTime.slider.values.min === 0,
    value: values,
    step: 1,
    formatLabel: (x) => moment(x).locale('en-gb').format('L')
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (component, values) => handleSliderChange(dispatch, ownProps, values),
    onChangeComplete: (component, values) => filters(component, values, dispatch, ownProps)
  };
};

const CostOverTimeRangeSliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeSlider);

export default CostOverTimeRangeSliderContainer;
