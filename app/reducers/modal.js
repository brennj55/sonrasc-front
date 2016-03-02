import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import { CropButton } from '../components';

const TOGGLE_CROP_DIALOG = 'TOGGLE_CROP_DIALOG';
const toggleCropDiaglog = () => {
  return {
    type: TOGGLE_CROP_DIALOG
  };
};

const initalState = false;

const cropDialog = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CROP_DIALOG:
      return !state;

    default:
      return state;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (open) => {
      dispatch(toggleCropDiaglog())
    }
  };
};

const Open = connect(
  mapDispatchToProps
)(CropButton);

const modalDisplay = combineReducers({
  cropDialog
});

export default modalDisplay;
