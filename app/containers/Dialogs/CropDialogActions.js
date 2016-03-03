import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import { clearDialog } from '../../actions';
import { isEmpty } from 'lodash';

const mapStateToProps = (state) => {
  return {
    disabled: isEmpty(state.UploadInvoice.cropImage.boundary),
    open: state.UploadInvoice.cropImage.open,
    boundary: state.UploadInvoice.cropImage.boundary
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancelClick: () => dispatch(clearDialog())
  }
};

class CropDialogActions extends Component {

  constructor(props) {
    super(props);
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
