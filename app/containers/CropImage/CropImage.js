import React from 'react';
import Cropper from 'react-cropper';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

const extractCropboxData = (cropbox) => {
    if (cropbox.x == 0 || cropbox.y == 0 || cropbox.height == 0 || cropbox.width == 0)
      return;
    console.log(this.refs);
};

export default class CropImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    let handleClose = () => {
      this.setState({open: false});
    };

    let x = () => {
      if (this.refs.cropper.getCroppedCanvas() === undefined) return;
      let image = this.refs.cropper.getCroppedCanvas().toDataURL("image/jpeg", 1.0);
      let blob = new Blob([image]);
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL( blob );
      console.log(imageUrl);
    };

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={handleClose}
      />,
      <FlatButton
        label="Crop Area"
        primary={true}
        onTouchTap={x}
      />
    ];

    return (
      <Dialog
        open={true}
        title={"Date"}
        actions={actions}
        open={this.state.open}
      >
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
          src="/static/images/0005.jpg"
        />
      </Dialog>
    );
  }
}