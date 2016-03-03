import { connect } from 'react-redux';
import io from 'socket.io-client';
import UploadInvoice from '../components/UploadInvoice';

const socket = io.connect('http://192.168.99.100:9005');
const mapStateToProps = (state, ownProps) => {
  return {
    socket: socket
  }
};

const UploadInvoiceContainer = connect(
  mapStateToProps
)(UploadInvoice);

export default UploadInvoiceContainer;
