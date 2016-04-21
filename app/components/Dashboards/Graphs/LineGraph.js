import ChartInit from './ChartInit';
import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/lib/icon-button';
import Radium from 'radium';
import styles from '../../../styles/flex.js';
let Chart = require('chart.js');
var LineChart = require("react-chartjs").Line;
import GraphError from './GraphError';

var chartOptions = {
  responsive: true
};

class LineGraph extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit(this.props.graphType);
  }

  render() {
    const { data } = this.props;
    if (data.datasets[0].data.length !== 0) {
      return (
        <LineChart
          data={data}
          options={chartOptions}
          redraw
        />
      );
    }
    else return (
      <GraphError />
    );
  }
}

LineGraph = Radium(LineGraph);
export default LineGraph;
