import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import { toggleCroppingDialog, openCroppingDialog } from '../../actions';
import { capitalize } from 'lodash';

const title = (type) => "Crop Image for " + capitalize(type);

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
