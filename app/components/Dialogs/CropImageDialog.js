import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CropBoxDialogActions from '../../containers/Dialogs/CropDialogActions';

import CropTooler from '../../containers/Dialogs/CropTooler';

class CropImageDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, title, cropType, actions } = this.props;

    return (
      <Dialog
        ref='Dialog'
        open={open}
        actions={actions}
        title={title}
      >
        <CropTooler />
      </Dialog>
    );
  }
}

export default CropImageDialog;
