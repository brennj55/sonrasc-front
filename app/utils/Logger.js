const logger = store => next => action => {
  if (action.type !== "CROP_IMAGE") {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.log('items:', store.getState().UploadInvoice.items.toJS());
    return result;
  }
  else {
    return next(action);
  }
};

export default logger;
