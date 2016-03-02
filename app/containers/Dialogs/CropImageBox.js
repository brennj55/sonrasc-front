import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import { toggleCroppingDialog, openCroppingDialog } from '../../actions';

const title = (type) => "Crop Image for " + type.substring(0, 1);

const mapStateToProps = (state, ownProps) => {
  const type = state.UploadInvoice.dialogVisibilityOfCropImageTool.cropType;
  return {
    title: title(type),
    type: type,
    image: state.UploadInvoice.image,
    open: state.UploadInvoice.dialogVisibilityOfCropImageTool.open
  }
};

const CropImageBox = connect(
  mapStateToProps
)(CropImageDialog);

export default CropImageBox;
