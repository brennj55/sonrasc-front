import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from '../../../styles/flex.js';
import PieChart from './PieChart';
import TimePeriodSelection from '../../Fields/TimePeriodSelection';

class SpendingPerBusiness extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit(this.props.graphType);
  }

  render() {
    const { data } = this.props;
    return (<div style={styles.largeSpace}>
      <h2 style={[styles.subheader]}>Spending per Business</h2>
      <div style={styles.largeSpace}>
        <PieChart graphType="COST_PER_BUSINESS" data={data} />
      </div>
    </div>);
  }
}

SpendingPerBusiness = Radium(SpendingPerBusiness);
export default SpendingPerBusiness;
