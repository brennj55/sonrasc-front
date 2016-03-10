import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { isEmpty } from 'lodash';

const mapStateToProps = (state) => {
  return {
    imageData: state.UploadInvoice.cropImage.imageData,
    cropType: state.UploadInvoice.cropImage.cropType,
    disabled: isEmpty(state.UploadInvoice.cropImage.boundary),
    open: state.UploadInvoice.cropImage.open,
    boundary: state.UploadInvoice.cropImage.boundary
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancelClick: () => dispatch(actions.clearDialog()),
    onCropClick: (cropType, imageData, boundary) => {
      dispatch(actions.fetchCroppedData(cropType, imageData, boundary))
    }
  }
};

class CropDialogActions extends Component {

  constructor(props) {
    super(props);
    this.cropClick = this.cropClick.bind(this);
  }

  cropClick() {
    let cropType = this.props.cropType;
    let imageData = this.props.imageData;
    let boundary = this.props.boundary;
    this.props.onCropClick(cropType, imageData, boundary);
  }

  render() {
    const {
      onCancelClick,
      onCropClick,
      disabled
    } = this.props;

    return (
      <div>
        <RaisedButton
          secondary={true}
          label="Cancel"
          onClick={onCancelClick}
        />
        <RaisedButton
          primary={true}
          label="Crop Image"
          disabled={disabled}
          onClick={this.cropClick}
        />
      </div>
    )
  }
}

const CropBoxDialogActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropDialogActions);

export default CropBoxDialogActions;
