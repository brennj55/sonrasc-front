import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CropImageDialog from '../../components/Dialogs/CropImageDialog';
import { connect } from 'react-redux';
import { toggleCroppingDialog } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    open: ownProps.open ===
      state.UploadInvoice.dialogVisibilityOfCropImageTool.open,
    type: state.UploadInvoice.dialogVisibilityOfCropImageTool.cropType,
    boundary: state.UploadInvoice.cropImage.boundary
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancelClick: () => dispatch(toggleCroppingDialog(''))
  }
};

class CropDialogActions extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { onCancelClick, onCropClick } = this.props;

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
