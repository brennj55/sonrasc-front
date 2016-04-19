import React, { Component, PropTypes } from 'react';
import InputRange from 'react-input-range';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { minValue, maxValue, value, step, onChange, style } = this.props;

    return (
      <InputRange
        maxValue={maxValue}
        minValue={minValue}
        value={value}
        step={step}
        onChange={onChange}
        style={style}
      />
    );
  }
}

export default RangeSlider;
