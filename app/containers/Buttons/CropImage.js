import { connect } from 'react-redux';
import CropButton from '../../components/Buttons/CropButton';
import { toggleCroppingDialog, openCroppingDialog } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    disabled: state.UploadInvoice.image === "",
    open: ownProps.open === state.UploadInvoice.dialogVisibilityOfCropImageTool
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (cropType) => dispatch(toggleCroppingDialog(cropType))
  }
};

const CropImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropButton);

export default CropImage;
