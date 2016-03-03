import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import { toggleCroppingDialog, openCroppingDialog } from '../../actions';
import { capitalize } from 'lodash';

const title = (type) => "Crop Image for " + capitalize(type);

const mapStateToProps = (state, ownProps) => {
  return {
    title: title(state.UploadInvoice.cropImage.cropType),
    image: state.UploadInvoice.image,
    open: state.UploadInvoice.cropImage.open
  }
};

const CropImageBox = connect(
  mapStateToProps
)(CropImageDialog);

export default CropImageBox;
