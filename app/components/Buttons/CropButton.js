import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import ImageCrop from 'material-ui/svg-icons/image/crop';
import CropImageBox from '../../containers/Dialogs/CropImageBox';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class CropButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getType() {
    return this.props.cropType;
  }

  handleClick() {
    let type = this.getType();
    this.props.onClick(type);
  }

  render() {
    const { disabled, cropType, style } = this.props;

    return (
      <div style={[styles.innerFlex, styles.space]}>
        <FlatButton
          label="Crop"
          secondary={true}
          icon={<ImageCrop />}
          disabled={disabled}
          onClick={this.handleClick}
          style={styles.buttonFlex}
        />
        <CropImageBox cropType={cropType} />
      </div>
    );
  }
}

CropButton = Radium(CropButton);
export default CropButton;
