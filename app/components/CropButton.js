import FloatingActionButton from 'material-ui/lib/floating-action-button';
import IconButton from 'material-ui/lib/icon-button';
import ImageCrop from 'material-ui/lib/svg-icons/image/crop';
import Radium from 'radium';
import styles from '../containers/InvoiceForm/styles.js';
import React, { PropTypes } from 'react';


import { CropImageDialog } from '../containers';

class CropButton extends React.Component {
  render() {

    const { type, onClick } = this.props;
    let open = false;
    let handleClose = () => {
      this.setState({open: !open});
    }

    return (
      <div style={styles.buttonFlex} type={type}>
        <IconButton>
          <CropImageDialog open={false} />
          <ImageCrop />
        </IconButton>
      </div>
    );
  }
}

CropButton = Radium(CropButton);
export default CropButton;
