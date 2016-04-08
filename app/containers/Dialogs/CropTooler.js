import CropTool from '../../components/Dialogs/CropTool';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    image: state.UploadInvoice.image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCrop: (imageData, boundary) =>
      dispatch(actions.uploadInvoice.cropImage(imageData, boundary))
  }
};

const CropTooler = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropTool);

export default CropTooler;
