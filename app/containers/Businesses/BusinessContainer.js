import Business from '../../components/Businesses/Business';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { push, goBack } from 'react-router-redux';
import { getKey } from '../../utils/url';

const randomColour = () => "#" + ((1<<24)*Math.random()|0).toString(16);

const getColour = () => {
  return {
    background: randomColour(),
    cursor: 'pointer'
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    styleFunc: (id) => randomColour(),
    invoices: state.Business.businessData.invoices,
    business: state.Business.businessData.business,
    address: state.Business.businessData.address
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => dispatch(actions.businessActions.getBusiness(getKey(ownProps.location.pathname))),
    onInvoiceClick: (id) => dispatch(push("/invoices/" + id)),
    onClickBackButton: () => dispatch(goBack())
  };
};

const BusinessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Business);

export default BusinessContainer;
