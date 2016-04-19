import RangeSlider from '../../components/Fields/RangeSlider';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const handleSliderChange = (values) => console.log(values);

const mapStateToProps = (state, ownProps) => {
  return {
    maxValue: ownProps.maxValue,
    minValue: ownProps.minValue,
    value: state.Dashboards.slider.values,
    step: ownProps.step
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (component, values) => dispatch(actions.dashboardActions.setSliderValues(values.min, values.max))
  };
};

const RangeSliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeSlider);

export default RangeSliderContainer;
