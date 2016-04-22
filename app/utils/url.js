export const getKey = (key) => {
  let location = key.split('/');
  return location[location.length - 1];
}
