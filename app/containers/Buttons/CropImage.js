import { connect } from 'react-redux';
import CropButton from '../../components/Buttons/CropButton';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    disabled: state.UploadInvoice.image === ""
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (cropType) => dispatch(actions.toggleCroppingDialog(cropType))
  }
};

const CropImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropButton);

export default CropImage;
