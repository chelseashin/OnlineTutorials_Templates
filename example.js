let currentDate = new Date();
let currentMonth = currentDate.getMonth(); // get current month (0-11)
let currentYear = currentDate.getFullYear(); // get current year

let monthsList = [];

// map month number to month name abbreviation
let monthNames = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

for (let i = 0; i < 12; i++) {
  let month = (currentMonth + 12 - i) % 12; // calculate previous month
  let year = currentYear - Math.floor((currentMonth + 12 - i) / 12); // calculate year for previous month
  let monthName = monthNames[month]; // get month name from array

  let yearLastTwo = year.toString().slice(-2);

  monthsList.push(`${monthName} ${yearLastTwo}`); // add month and year to list in "MMM YYYY" format
}

console.log(monthsList);


////////////////////////////////////////////////////////
// Create an empty array to store the months
const last12Months = [];

// Get the current date
const currentDate = new Date();

// Define an array of month names
const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// Loop through the past 12 months
for (let i = 0; i < 12; i++) {
  // Get the month for the current iteration
  const month = currentDate.getMonth() - i;
  
  // Get the year for the current iteration
  const year = currentDate.getFullYear();
  
  // If the month is less than 0 (i.e. January of the previous year), adjust the year and month accordingly
  if (month < 0) {
    month += 12;
    year -= 1;
  }
  
  // Format the month and year as a string in the desired format
  const formattedMonth = `${monthNames[month]} ${String(year).substr(2, 2)}`;
  
  // Add the formatted month to the array
  last12Months.push(formattedMonth);
}

// The last12Months array now contains the past 12 months, represented as strings in the format "MON YY"
console.log(last12Months);
