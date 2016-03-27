import Items from '../../components/Fields/Items';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { sumBy, isUndefined, round, has } from 'lodash';

const getTotalCost = (items) => {
  let prices = items.toArray();
  console.log(prices);
  let sum = sumBy(prices, (item) => {
    if (has(item, 'Total.value')) return parseFloat(item.Total.value);
  });
  if (!isUndefined(sum)) {
    console.log(sum);
    return round(sum, 2);
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    totalCost: (getTotalCost(state.UploadInvoice.items) || 0)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (event) => dispatch(actions.addItem())
  }
};

const ItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemList;
