import ItemPropertyField from '../../components/Fields/ItemPropertyField';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { isEmpty } from 'lodash';

const getSuggestion = (state, ownProps, value) => {
  let type = "item/" + ownProps.id + "/" + ownProps.header.toLowerCase();
  let theSuggestions = state.UploadInvoice.suggestions.data.filter(x => x.type === type);
  if (!theSuggestions[0]) return []; //no suggestions.
  else return theSuggestions[0].count.filter(x => !isEmpty(x));
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
      if (field === 'Quantity' || field === 'Price' || field === 'VAT') {
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
