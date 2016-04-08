const logger = store => next => action => {
  if (action.type !== "CROP_IMAGE") {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  }
  else {
    return next(action);
  }
};

export default logger;
