import Businesses from '../../components/Businesses/Businesses';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { push } from 'react-router-redux';

const randomColour = () => "#" + ((1<<24)*Math.random()|0).toString(16);

const getColour = () => {
  return {
    background: randomColour(),
    cursor: 'pointer'
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false,
    businesses: state.BusinessGrid.businesses.data || [],
    styleFunc: (id) => getColour()
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => dispatch(actions.businessGrid.getBusinessesForGrid()),
    onBusinessClick: (id) => dispatch(push('/businesses/' + id))
  };
};

const BusinessesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Businesses);

export default BusinessesContainer;
