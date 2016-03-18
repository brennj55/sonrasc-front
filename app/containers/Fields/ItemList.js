import Items from '../../components/Fields/Items';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (event) => dispatch(actions.addItem())
  }
};

const ItemList = connect(
  null,
  mapDispatchToProps
)(Items);

export default ItemList;
