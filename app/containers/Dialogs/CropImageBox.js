import React, { Component } from 'react';
import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import CropBoxDialogActions from './CropDialogActions';
import { connect } from 'react-redux';
import { capitalize } from 'lodash';

const title = (type) => {
  if (type.includes('/')) {
    let split = type.split('/');
    return "Crop Image for " + capitalize(split[2]) + " of item " + (parseInt(split[1]) + 1);
  }
  return "Crop Image for " + capitalize(type);
};

const mapStateToProps = (state, ownProps) => {
  return {
    title: title(ownProps.cropType),
    image: state.UploadInvoice.image,
    open: state.UploadInvoice.cropImage.open && (ownProps.cropType === state.UploadInvoice.cropImage.cropType),
    cropType: ownProps.cropType,
    actions: <CropBoxDialogActions cropType={ownProps.cropType} />
  }
};

const CropImageBox = connect(
  mapStateToProps
)(CropImageDialog);

export default CropImageBox;
