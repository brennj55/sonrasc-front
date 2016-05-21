import { connect } from 'react-redux';
import SubmitInvoiceButton from '../../components/Buttons/SubmitInvoiceButton';
import { isEmpty, keys } from 'lodash';
import * as actions from '../../actions';

const checkIfItemsValid = (items) => {
  let headers = ["Name", "Price", "Quantity", "VAT", "Total"];
  let allItemsValid = true;
  items.map(item => {
    if (isEmpty(item)) allItemsValid = false;
    headers.map(header => {
      if (!item[header].value) allItemsValid = false;
    })
  });
  return allItemsValid;
};

const checkIfValid = (state) => {
  try {
    return state.image === ""
      || !state.form.get('business').value
      || !state.form.get('date').value
      || !state.form.get('address').value
      || state.items.size === 0
      || !checkIfItemsValid(state.items);
  }

  catch (e) {
    return true;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    disabled: checkIfValid(state.UploadInvoice)
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
