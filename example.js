let currentDate = new Date();
let currentMonth = currentDate.getMonth(); // get current month (0-11)
let currentYear = currentDate.getFullYear(); // get current year

let monthsList = [];

// map month number to month name abbreviation
let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

for (let i = 0; i < 12; i++) {
    let month = (currentMonth + 12 - i) % 12; // calculate previous month
    let year = currentYear - Math.floor((currentMonth + 12 - i) / 12); // calculate year for previous month
    let monthName = monthNames[month]; // get month name from array
    let yearLastTwo = year.toString().slice(-2); // get last two characters of year as string
    monthsList.push(`${monthName} ${yearLastTwo}`); // add month and year to list in "MMM YY" format
}

monthsList.reverse(); // reverse the list of months

console.log(monthsList);

////////////////////////////////////////////////////////

let _monthsList = [];
let d = new Date();

for (let i = 0; i < 12; i++) {
  let monthName = d.toLocaleString("default", { month: "short" }).toUpperCase();
  let year = d.getFullYear().toString().substr(-2);
  let monthAndYear = monthName + " " + year;
  _monthsList.push(monthAndYear);
  d.setMonth(d.getMonth() - 1);
}

console.log(_monthsList.reverse());