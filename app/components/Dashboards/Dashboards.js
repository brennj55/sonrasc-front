import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import LineGraph from './Graphs/LineGraph';
import RangeSliderContainer from '../../containers/Fields/RangeSliderContainer';
import TimePeriodSelection from '../Fields/TimePeriodSelection';

class Dashboards extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { fetching } = this.props;
    return (
      <div style={styles.base}>
        <h1 style={[styles.header]}>Dashboards</h1>
        <div style={styles.space}>
          <h2 style={[styles.subheader]}>Total Cost Over Time</h2>
          <LineGraph />
          <RangeSliderContainer />
          <TimePeriodSelection />
        </div>
      </div>

    );
  }
}

Dashboards = Radium(Dashboards);
export default Dashboards;
