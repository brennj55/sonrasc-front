import React, { Component } from 'react';
import { selectImage } from '../../actions';
import FlatButton from 'material-ui/lib/flat-button';
import ImageAddAPhoto from 'material-ui/lib/svg-icons/image/add-a-photo';
import Radium from 'radium';
import styles from '../../styles/flex.js';

const fileStyle = {
  button: {
    margin: 12,
    flex: '1 1 45%'
  },

  ImageInput: {
    cursor: 'pointer'
    ,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

class UploadImageButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getImage() {
    if (this.props.image && this.refs.image.files[0] === this.props.image)
      return this.props.image;
    else return this.refs.image.files[0];
  }

  handleClick() {
    let file = this.getImage();
    this.props.onChange(file);
  }

  render() {
    return (
      <div style={[styles.innerFlex, styles.space]}>
        <label style={[styles.flex1, styles.label]}>Invoice Image</label>
        <FlatButton
          label="Upload a file"
          primary={true}
          icon={<ImageAddAPhoto />}
          style={fileStyle.button}
        >
          <input
            type='file'
            ref='image'
            accept="image/*"
            onChange={ this.handleClick }
            style={ fileStyle.ImageInput }
          />
        </FlatButton>
      </div>
    );
  }
}

UploadImageButton = Radium(UploadImageButton);
export default UploadImageButton;
