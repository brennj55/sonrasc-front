import Items from '../../components/Fields/Items';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { sumBy, isUndefined, round, has } from 'lodash';

const getTotalCost = (items) => {
  let prices = items.toArray();
  let sum = sumBy(prices, (item) => {
    if (has(item, 'Total.value')) return parseFloat(item.Total.value);
  });
  if (!isUndefined(sum)) {
    return round(sum, 2);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    totalCost: (getTotalCost(state.UploadInvoice.items) || Number(0).toFixed(2))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (event) => dispatch(actions.uploadInvoice.addItem())
  }
};

const ItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemList;
