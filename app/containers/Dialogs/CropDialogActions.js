import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { isEmpty } from 'lodash';

const checkIfIsItemAndUpdateTotal = (dispatch, cropType) => {
  console.log('here');
  if (cropType.includes('Price') || cropType.includes('Quantity')) {
    console.log('in here');
    const [_, id, __] = cropType.split('/');
    dispatch(actions.uploadInvoice.updateItemsTotal(id));
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.cropType === state.UploadInvoice.cropImage.cropType,
    imageData: state.UploadInvoice.cropImage.imageData,
    cropDisabled: isEmpty(state.UploadInvoice.cropImage.boundary),
    boundary: state.UploadInvoice.cropImage.boundary
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCancelClick: () => dispatch(actions.uploadInvoice.clearDialog()),
    onCropClick: (cropType, imageData, boundary) => {
      dispatch(actions.uploadInvoice.fetchCroppedData(cropType, imageData, boundary))
        .then(() => checkIfIsItemAndUpdateTotal(dispatch, cropType));
    }
  }
};

class CropDialogActions extends Component {

  constructor(props) {
    super(props);
    this.cropClick = this.cropClick.bind(this);
  }

  cropClick() {
    let imageData = this.props.imageData;
    let boundary = this.props.boundary;
    let cropType = this.props.cropType;
    if (this.props.active) {
      this.props.onCropClick(cropType, imageData, boundary);
    }
  }

  render() {
    const {
      onCancelClick,
      cropDisabled,
      cropType
    } = this.props;

    return (
      <div cropType={cropType}>
        <RaisedButton
          secondary={true}
          label="Cancel"
          onClick={onCancelClick}
        />
        <RaisedButton
          primary={true}
          label="Crop Image"
          disabled={cropDisabled}
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
