import React from 'react';
import FieldList from './FieldList.jsx';

export default class TextBasedInvoiceUpload extends React.Component {
  render() {
    return (
      <div>
        <h1>Enter Invoice Details</h1>
        <FieldList />
        <button>Upload</button>
      </div>
    );
  }
}
