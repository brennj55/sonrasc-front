import Notification from '../../components/Notifications/Notification';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.UploadInvoice.suggestions.open,
    message: state.UploadInvoice.suggestions.message
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestClose: () => dispatch(actions.uploadInvoice.closeNotiicationBar())
  }
}

const InvoiceSuggestionNotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);

export default InvoiceSuggestionNotificationContainer;
