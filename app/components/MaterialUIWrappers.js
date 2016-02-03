import React, { Component } from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export class DatePickerWrapper extends Component {
  onChange(evt, date) {
    if (this.props.onChange) {
      this.props.onChange(date);
    }
  }
  render() {
    return <DatePicker {...this.props} onChange={this.onChange.bind(this)}/>
  }
}
