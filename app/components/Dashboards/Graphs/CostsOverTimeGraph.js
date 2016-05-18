import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from '../../../styles/flex.js';
import LineGraphContainer from '../../../containers/Dashboards/Graphs/LineGraphContainer';
import TimePeriodSelection from '../../Fields/TimePeriodSelection';

let CostsOverTimeGraph = ({ data }) => (
  <div style={styles.space}>
    <h2 style={[styles.subheader]}>Total Cost Over Time</h2>
    <LineGraphContainer graphType="COSTS_OVER_TIME" data={data} />

  </div>
);

CostsOverTimeGraph = Radium(CostsOverTimeGraph);
export default CostsOverTimeGraph;
