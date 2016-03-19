import Items from '../../components/Fields/Items';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { sumBy } from 'lodash';

const getTotalCost = (items) => {
  let prices = items.toArray();
  return sumBy(prices, (item) => {
    if (item.Total) return item.Total;
  });
}

const mapStateToProps = (state, ownProps) => {
  return {
    totalCost: (getTotalCost(state.UploadInvoice.items) || 0).toFixed(2)
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
