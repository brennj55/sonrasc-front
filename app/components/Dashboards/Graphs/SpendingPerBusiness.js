import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from '../../../styles/flex.js';
import PieChart from './PieChart';
import TimePeriodSelection from '../../Fields/TimePeriodSelection';

let x = [{
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }];

let SpendingPerBusiness = ({ data }) => (
  <div style={styles.largeSpace}>
    <h2 style={[styles.subheader]}>Spending per Business</h2>
    <div style={styles.largeSpace}>
      <PieChart graphType="COST_PER_BUSINESS" data={x} />
    </div>
  </div>
);

SpendingPerBusiness = Radium(SpendingPerBusiness);
export default SpendingPerBusiness;
