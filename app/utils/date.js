import { groupBy } from 'lodash';

const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

export function printDate(date) {
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

export const groupByYear = (dates) => groupBy(dates, date => date.getFullYear());
export const groupByMonth = (dates) => groupBy(dates, date => date.getMonth());

import moment from 'moment';
moment.locale('en-gb');

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getLabels = (state) => {
  let dateValues = [];
  for (let i = 0; i < 10; i++) {
    let date = randomDate(new Date(2005, 0, 1), new Date());
    dateValues.push(date);
  }

  dateValues.sort(function(a,b){
    return new Date(a) - new Date(b);
  });

  console.log(groupByYear(dateValues));
  let dateStrings = dateValues.map(date => moment(date).format('L'));

  return dateStrings;
};

const getRandomData = () => {
  let values = [];
  for (let i = 0; i < 1000; i++) {
    values.push((Math.random() * 10000).toFixed(2));
  }
  return values;
};

const getData = (state) => {
  let values = getRandomData();
  return values;
}
