import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import CostsOverTimeGraph from './Graphs/CostsOverTimeGraph';
import CostOverTimeRangeSliderContainer from '../../containers/Dashboards/Graphs/CostOverTimeRangeSliderContainer';
import SpendingPerBusinessContainer from '../../containers/Dashboards/Graphs/SpendingPerBusinessContainer';

class Dashboards extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { fetching, data } = this.props;
    return (
      <div style={styles.base}>
        <h1 style={[styles.header]}>Dashboards</h1>
        <CostsOverTimeGraph data={data} />
        <div>
          <CostOverTimeRangeSliderContainer graphType="COSTS_OVER_TIME" />
        </div>
        <SpendingPerBusinessContainer />
      </div>

    );
  }
}

Dashboards = Radium(Dashboards);
export default Dashboards;
