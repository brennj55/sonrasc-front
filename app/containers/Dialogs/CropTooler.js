import CropTool from '../../components/Dialogs/CropTool';
import { connect } from 'react-redux';
import { cropImage } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    image: state.UploadInvoice.image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCrop: (imageData, boundary) =>
      dispatch(cropImage(imageData, boundary))
  }
};

const CropTooler = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropTool);

export default CropTooler;
