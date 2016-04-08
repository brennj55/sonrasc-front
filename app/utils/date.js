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
}
