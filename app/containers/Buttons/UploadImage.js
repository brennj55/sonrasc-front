import { connect } from 'react-redux';
import * as actions from '../../actions';
import UploadImageButton from '../../components/Buttons/UploadImageButton';

const getFileData = (image) => {
  return new Promise((resolve, reject) => {
      if (!image) reject(Error("No Image Found."));
      let reader = new FileReader();
      reader.onloadend = () => {
        let dataURL = reader.result;
        resolve(dataURL);
      };
      reader.readAsDataURL(image);
    }
  );
};

const getImageData = (image, dispatch) => {
  getFileData(image).then((res) => {
    dispatch(actions.uploadInvoice.selectImage(res));
  }, (error) => console.error("Error dispatching image."));
};


const mapStateToProps = (state, ownProps) => {
  return {
    image: state.UploadInvoice.image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (image) => getImageData(image, dispatch)
  }
}

const UploadImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImageButton)

export default UploadImage;
