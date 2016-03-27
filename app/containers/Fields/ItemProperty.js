import ItemPropertyField from '../../components/Fields/ItemPropertyField';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  let items = state.UploadInvoice.items;
  let value = (items.get(ownProps.id)[ownProps.header] || "").value;
  return { value };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value, field, id) => {
      dispatch(actions.updateItem(value, field, id));
    }
  };
};

const ItemProperty = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPropertyField);

export default ItemProperty;
