import ItemPropertyField from '../../components/Fields/ItemPropertyField';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { isEmpty } from 'lodash';

const getSuggestion = (state, ownProps, value) => {
  return [];
};

const mapStateToProps = (state, ownProps) => {
  let items = state.UploadInvoice.items;
  let value = (items.get(ownProps.id)[ownProps.header] || "").value;
  return {
    value,
    suggestions: getSuggestion(state, ownProps, value)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value, field, id) => {
      dispatch(actions.uploadInvoice.updateItem(value, field, id));
      if (field === 'Quantity' || field === 'Price') {
        dispatch(actions.uploadInvoice.updateItemsTotal(id));
      }
    }
  };
};

const ItemProperty = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPropertyField);

export default ItemProperty;
