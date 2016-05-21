import ChartInit from './ChartInit';
import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import Radium from 'radium';
import styles from '../../../styles/flex.js';
let Chart = require('chart.js');
var Pie = require("react-chartjs").Pie;
import GraphError from './GraphError';

var chartOptions = {
  responsive: true
};

class PieChart extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.onInit(this.props.graphType);
  }

  render() {
    const { data } = this.props;
    if (data.length !== 0) {
      return (
        <Pie
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

PieChart = Radium(PieChart);
export default PieChart;
