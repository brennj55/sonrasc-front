import { connect } from 'react-redux';
import CropButton from '../../components/Buttons/CropButton';
import { toggleCroppingDialog, openCroppingDialog } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    type: ownProps.type,
    disabled: state.UploadInvoice.image === ""
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
