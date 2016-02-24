import React from 'react';
import Cropper from 'react-cropper';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';


export default class CropImage extends React.Component {
  render() {
    return (
      <Dialog
        open={true}
        title={"Crop window"}
      >
      <Cropper
        ref='cropper'
        guides={false}
        preview='.preview'
        viewMode={1}
        autoCrop={false}
        movable={false}
        center={false}
        crop={this._crop}
        ref='cropper'
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
