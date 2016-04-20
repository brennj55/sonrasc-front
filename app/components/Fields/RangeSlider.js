import React, { Component, PropTypes } from 'react';
import InputRange from 'react-input-range';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { minValue, maxValue, value,
      step, onChange, style, disabled, graphType } = this.props;

    return (
      <div graphType={graphType}>
        <InputRange
          maxValue={maxValue}
          minValue={minValue}
          value={value}
          step={step}
          disabled={disabled}
          onChange={onChange}
          style={style}
        />
      </div>
    );
  }
}

export default RangeSlider;
