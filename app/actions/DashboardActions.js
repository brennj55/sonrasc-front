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
  console.log(graphType, "in setSliderValues");
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

export const SET_LABEL_DATA = "SET_LABEL_DATA";
export function setGraphLabels(labels, graphType) {
  return {
    type: SET_LABEL_DATA,
    labels, graphType
  }
}

export const FILTER_GRAPH_DATA = "FILTER_GRAPH_DATA";
export function filterGraphData(min, max, graphType) {
  return {
    type: FILTER_GRAPH_DATA,
    min, max, graphType
  }
}
