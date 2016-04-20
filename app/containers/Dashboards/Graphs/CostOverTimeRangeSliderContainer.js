import RangeSlider from '../../../components/Fields/RangeSlider';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const handleSliderChange = (values) => console.log(values);

const mapStateToProps = (state, ownProps) => {
  console.log(state.Dashboards.CostOverTime.slider.maxValue, "CostOverTimeSlider");
  return {
    maxValue: state.Dashboards.CostOverTime.slider.maxValue,
    minValue: state.Dashboards.CostOverTime.slider.minValue,
    //disabled: state.Dashboards.CostOverTime.slider.values.min === 0,
    graphType: "COSTS_OVER_TIME",
    value: state.Dashboards.CostOverTime.slider.values,
    step: ownProps.step || 1
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (component, values) => dispatch(actions.dashboardActions.setSliderValues(values.min, values.max, ownProps.graphType))
  };
};

const CostOverTimeRangeSliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeSlider);

export default CostOverTimeRangeSliderContainer;
