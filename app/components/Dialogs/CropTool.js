import React, { Component } from 'react';
import Cropper from 'react-cropper';

const getBoundaryBox = (data) => {
  return {
    left: data.x,
    top: data.y,
    width: data.width,
    height: data.height
  }
}

class CropTool extends Component {
  constructor(props) {
    super(props);
    this.crop = this.crop.bind(this);
  }

  crop() {
    if (this.refs.cropper.getCroppedCanvas() === undefined) return;
    let croppedArea = this.refs.cropper.getCroppedCanvas().toDataURL("image/jpeg", 1.0);
    let boundary = getBoundaryBox(this.refs.cropper.getData());
    this.props.onCrop(croppedArea, boundary);
  }

  render() {
    const { image } = this.props;

    return (
      <Cropper
        ref='cropper'
        guides={false}
        viewMode={1}
        autoCrop={false}
        movable={false}
        center={false}
        style={{
          borderRadius: '3px',
          maxHeight: '50vh'
        }}
        crop={this.crop}
        src={image}
      />
    );
  }
}

export default CropTool;
