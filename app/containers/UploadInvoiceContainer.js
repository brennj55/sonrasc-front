import { connect } from 'react-redux';
import UploadInvoice from '../components/UploadInvoice';

const mapStateToProps = (state, ownProps) => {
  return {
  //  socket: socket
  }
};

const UploadInvoiceContainer = connect(
  mapStateToProps
)(UploadInvoice);

export default UploadInvoiceContainer;
