import { connect } from 'react-redux';
import SubmitInvoiceButton from '../../components/Buttons/SubmitInvoiceButton';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    disabled: state.UploadInvoice.image === ""
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(actions.uploadInvoice.uploadInvoice())
  }
};

const SubmitInvoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitInvoiceButton);

export default SubmitInvoice;
