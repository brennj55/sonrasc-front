import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import { toggleCroppingDialog } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    open: ownProps.open === state.UploadInvoice.dialogVisibilityOfCropImageTool
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancelClick: () => dispatch(toggleCroppingDialog('')),
    onCropClick: () => dispatch(toggleCroppingDialog(''))
  }
};

class CropDialogActions extends Component {
  render() {
    const { onCancelClick, onCropClick } = this.props;

    return (
      <div>
        <FlatButton
          label="Cancel"
          onClick={onCancelClick}
        />
        <FlatButton
          label="Crop Image"
          onClick={onCropClick}
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
