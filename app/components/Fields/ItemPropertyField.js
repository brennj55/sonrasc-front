import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';


class ItemPropertyField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  getID() {
    return this.props.id;
  }

  handleChange(field, value) {
    let id = this.getID();
    this.props.onChange(value, field, id);
  }

  render() {
    const { id, header, value } = this.props;

    return (
      <TextField
        multiLine={true}
        onChange={(event) => this.handleChange(header, event.target.value)}
        value={value}
      />
    );
  }
}

export default ItemPropertyField;
