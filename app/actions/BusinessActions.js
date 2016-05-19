import { min, max, sortBy, sum } from 'lodash';

export const SET_BUSINESS_DATA = "SET_BUSINESS_DATA";
export function setData(data) {
  return {
    type: SET_BUSINESS_DATA,
    data
  }
}

export const SET_GRAPH_DATA_FOR_BUSINESS = "SET_GRAPH_DATA_FOR_BUSINESS";
export function setGraphDataForBusiness(business) {
  return {
    type: SET_GRAPH_DATA_FOR_BUSINESS,
    business
  }
}

export function getBusiness(key) {
  return (dispatch) => {
    fetch('http://192.168.99.100:7004/api/businesses/data/' + key, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json())
      .then(json => {
        console.log(json, 'sxss');
        let data = sortBy(json.business.invoices, d => new Date(d.date.value).getTime());
        let xs = data.map(d => new Date(d.date.value).getTime());
        let minLabel = min(xs) || 0;
        let maxLabel = max(xs) || 1;
        console.log(xs, minLabel, maxLabel);
        dispatch(setGraphDataForBusiness(json.business));
        return json;
      })
      .then(json => dispatch(setData(json.business)));
  };
}
