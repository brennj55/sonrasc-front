import ChartInit from './ChartInit';
import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/lib/icon-button';
let Chart = require('chart.js');
var LineChart = require("react-chartjs").Line;


var chartOptions = {
  responsive: true
};

var data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My Second dataset",
			fillColor: "rgba(0,0,0,0.0)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90, 23]
		}
	]
};

const LineGraph = () => (<LineChart data={data} options={chartOptions} />);

export default LineGraph;
