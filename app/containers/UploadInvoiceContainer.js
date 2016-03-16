import { connect } from 'react-redux';
import UploadInvoice from '../components/UploadInvoice';

const checkIfNewDateAvailable = (state) => {
  if (!state.UploadInvoice.form.has('date')) return null;
  else return new Date(state.UploadInvoice.form.get('date').value);
};

const mapStateToProps = (state, ownProps) => {
  return {
    date: checkIfNewDateAvailable(state)
  };
};

const UploadInvoiceContainer = connect(
  mapStateToProps
)(UploadInvoice);

export default UploadInvoiceContainer;
