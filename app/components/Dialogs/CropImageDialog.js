import React, { Component } from 'react';
import Cropper from 'react-cropper';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

import CropBoxDialogActions from '../../containers/Dialogs/CropDialogActions';

class CropImageDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, title } = this.props;

    return (
      <Dialog
        ref='Dialog'
        open={open}
        actions={<CropBoxDialogActions />}
        title={title}
      >
        Hello.
      </Dialog>
    );
  }
}

export default CropImageDialog;
