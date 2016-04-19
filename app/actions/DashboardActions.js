export const CHANGE_SLIDER_VALUES = "CHANGE_SLIDER_VALUES";
export function setSliderValues(min, max) {
  return {
    type: CHANGE_SLIDER_VALUES,
    max, min
  }
}
