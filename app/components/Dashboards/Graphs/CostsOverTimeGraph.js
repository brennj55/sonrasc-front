import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from '../../../styles/flex.js';
import LineGraphContainer from '../../../containers/Dashboards/Graphs/LineGraphContainer';
import CostOverTimeRangeSliderContainer from '../../../containers/Dashboards/Graphs/CostOverTimeRangeSliderContainer';
import TimePeriodSelection from '../../Fields/TimePeriodSelection';

let CostsOverTimeGraph = () => (
  <div style={styles.space}>
    <h2 style={[styles.subheader]}>Total Cost Over Time</h2>
    <LineGraphContainer graphType="COSTS_OVER_TIME" />
    <CostOverTimeRangeSliderContainer graphType="COSTS_OVER_TIME" />
  </div>
);

CostsOverTimeGraph = Radium(CostsOverTimeGraph);
export default CostsOverTimeGraph;
