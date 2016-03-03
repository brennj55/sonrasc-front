import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectImage } from '../../actions';

import FlatButton from 'material-ui/lib/flat-button';
import ImageAddAPhoto from 'material-ui/lib/svg-icons/image/add-a-photo';

const styles = {
  button: {
    margin: 12,
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
      <div>
        <label>Upload Invoice Image</label>
        <FlatButton
          primary={true}
          icon={<ImageAddAPhoto />}
          style={styles.button}
        >
          <input
            type='file'
            ref='image'
            onChange={ this.handleClick }
            style={ styles.ImageInput }
          />
        </FlatButton>
      </div>
    );
  }
}

export default UploadImageButton;
