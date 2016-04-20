import RangeSlider from '../../../components/Fields/RangeSlider';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const handleSliderChange = (dispatch, ownProps, values) => {
  dispatch(actions.dashboardActions.setSliderValues(values.min, values.max, ownProps.graphType));
  dispatch(actions.dashboardActions.filterGraphData(values.min, values.max, ownProps.graphType));
}

const mapStateToProps = (state, ownProps) => {
  let values = state.Dashboards.CostOverTime.slider.values;
  return {
    maxValue: state.Dashboards.CostOverTime.slider.maxValue,
    minValue: state.Dashboards.CostOverTime.slider.minValue,
    disabled: state.Dashboards.CostOverTime.slider.values.min === 0,
    value: values,
    step: 1
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (component, values) => handleSliderChange(dispatch, ownProps, values)
  };
};

const CostOverTimeRangeSliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeSlider);

export default CostOverTimeRangeSliderContainer;
