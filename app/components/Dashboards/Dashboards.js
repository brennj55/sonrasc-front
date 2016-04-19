import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import LineGraphContainer from '../../containers/Dashboards/Graphs/LineGraphContainer';
import CostOverTimeRangeSliderContainer from '../../containers/Dashboards/Graphs/CostOverTimeRangeSliderContainer';
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
          <LineGraphContainer type="COSTS_OVER_TIME" />
          <CostOverTimeRangeSliderContainer />
          <div style={styles.spacePadding2em}>
            Aggregate by
            <TimePeriodSelection />
          </div>
        </div>
      </div>

    );
  }
}

Dashboards = Radium(Dashboards);
export default Dashboards;
