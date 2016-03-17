import React, { Component } from 'react';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import FlatButton from 'material-ui/lib/flat-button';

class RemoveItemButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getID() {
    return this.props.id;
  }

  handleClick() {
    let id = this.getID();
    this.props.onClick(id);
  }

  render() {
    const { key } = this.props;

    return (
      <FlatButton
        label="Remove"
        secondary={true}
        icon={<ActionDelete />}
        onClick={this.handleClick}
        key={key}
      />
    );
  }
}

export default RemoveItemButton;
