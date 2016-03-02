import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import ImageCrop from 'material-ui/lib/svg-icons/image/crop';
import CropImageBox from '../../containers/Dialogs/CropImageBox';

class CropButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getType() {
    return this.props.type;
  }

  handleClick() {
    let type = this.getType();
    this.props.onClick(type);
  }

  render() {
    const { type, open } = this.props;

    return (
      <div
        onClick={this.handleClick}
      >
        <FlatButton
          label="Crop"
          secondary={true}
          icon={<ImageCrop />}
        />
        <CropImageBox type={type} open={open} />
      </div>
    );
  }
}

export default CropButton;
