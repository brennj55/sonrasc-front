import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { modalDisplay } from './modal.js';

const rootReducer = combineReducers({
  form: formReducer,
  modalDisplay: modalDisplay
});

export default rootReducer;
