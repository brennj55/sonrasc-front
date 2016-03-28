import { connect } from 'react-redux';
import UploadInvoice from '../components/UploadInvoice';

const checkIfNewDateAvailable = (state) => {
  if (state.UploadInvoice.form.has('date')) return new Date(state.UploadInvoice.form.get('date').value);
  else return;
};

const checkIfNewAddressAvailable = (state) => {
  if (!state.UploadInvoice.form.has('address')) return null;
  else return state.UploadInvoice.form.get('address').value;
}

const mapStateToProps = (state, ownProps) => {
  return {
    date: checkIfNewDateAvailable(state),
    address: checkIfNewAddressAvailable(state),
    items: state.UploadInvoice.items,
    uploading: state.UploadInvoice.upload.isUploading
  };
};

const UploadInvoiceContainer = connect(
  mapStateToProps
)(UploadInvoice);

export default UploadInvoiceContainer;
