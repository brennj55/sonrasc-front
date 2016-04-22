export const TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION";
export function toggleNavigation() {
  return {
    type: TOGGLE_NAVIGATION
  };
}

export const CLOSE_NAVIGATION = "CLOSE_NAVIGATION";
export function closeNavigation() {
  return {
    type: CLOSE_NAVIGATION
  }
}
