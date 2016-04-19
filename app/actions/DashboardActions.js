export const SET_GRAPH_TYPE = "SET_GRAPH_TYPE";
export function setGraphType(type) {
  return {
    type: SET_GRAPH_TYPE
  }
}

export const CHANGE_SLIDER_VALUES = "CHANGE_SLIDER_VALUES";
export function setSliderValues(min, max, type) {
  return {
    type: CHANGE_SLIDER_VALUES,
    max, min, type
  }
}
