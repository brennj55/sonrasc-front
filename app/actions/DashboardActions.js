import { min, max, sortBy, sum } from 'lodash';

export const SET_GRAPH_TYPE = "SET_GRAPH_TYPE";
export function setGraphType(graphType) {
  return {
    type: SET_GRAPH_TYPE,
    graphType
  }
}

export const INITALISE_SLIDER_VALUES = "INITALISE_SLIDER_VALUES";
export function initSliderValues(min, max, graphType) {
  return {
    type: INITALISE_SLIDER_VALUES,
    max, min, graphType
  }
}

export const CHANGE_SLIDER_VALUES = "CHANGE_SLIDER_VALUES";
export function setSliderValues(min, max, graphType) {
  return {
    type: CHANGE_SLIDER_VALUES,
    max, min, graphType
  }
}

export const SET_GRAPH_DATA = "SET_GRAPH_DATA";
export function setGraphData(data, graphType) {
  return {
    type: SET_GRAPH_DATA,
    data, graphType
  }
}

export const FILTER_GRAPH_DATA = "FILTER_GRAPH_DATA";
export function filterGraphData(min, max, graphType) {
  return {
    type: FILTER_GRAPH_DATA,
    min, max, graphType
  }
}

export const FILTER_PIE_CHART = "FILTER_PIE_CHART";
export function filterPieChart(min, max) {
  return {
    type: FILTER_PIE_CHART,
    min, max
  }
}

export function getTotalsData() {
  return dispatch => {
    fetch('http://192.168.99.100:7004/api/data/totals', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json())
      .then(json => {
        dispatch(setGraphType("COSTS_OVER_TIME"));
        json = sortBy(json, d => d.x);
        dispatch(setGraphData(json, "COSTS_OVER_TIME"));
        let xs = json.map(d => d.x);
        let minLabel = min(xs) || 0;
        let maxLabel = max(xs) || 1;
        dispatch(initSliderValues(minLabel, maxLabel, "COSTS_OVER_TIME"));
        dispatch(setSliderValues(minLabel, maxLabel, "COSTS_OVER_TIME"));
      });
  };
}

const prepareBusinessData = (businesses) => {
  return businesses.map(business => {
    let x = business.invoices.map(invoice => invoice.totalCost);
    let y = sum(x);
    return { business: business.business, sum: y, invoices: business.invoices};
  });
}

export const SET_PI_CHART_DATA = "SET_PI_CHART_DATA";
export function setPieChartData(data) {
  return {
    type: SET_PI_CHART_DATA,
    data
  }
}

export function getPieChartData() {
  return dispatch => {
    fetch('http://192.168.99.100:7004/api/data/businessTotals', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json())
      .then(json => {
        let x = prepareBusinessData(json.businesses);
        dispatch(setPieChartData(x));
      });
  };
}
