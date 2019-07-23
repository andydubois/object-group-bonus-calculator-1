const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


//take in one employee and calculate based on rating
let bonusArray = [];


function bonusCalc(employee) {
  let bonus = 0;
  for (i = 0; i < employee.length; i++) {
    if (employee[i].reviewRating == 3) {
      bonus = employee[i].annualSalary * .04;
      console.log(employee[i].name, bonus);
    } else if (employee[i].reviewRating == 4) {
      bonus = employee[i].annualSalary * .06;
      employee[i].push(test:bonus); 
      console.log(employee[i].name, bonus);
    } else if (employee[i].reviewRating == 5) {
      bonus = employee[i].annualSalary * .10;
      console.log(employee[i].name, bonus);
    } else {
      console.log(employee[i].name, 'no bonus');
    }
  }
  for (i = 0; i < employee.length; i++) {
    if (employee[i].employeeNumber.length == 4) {
      bonus = bonus + (employee[i].annualSalary * .05);
      console.log(employee[i].name, bonus);
    } 
  
  } 
}

function employeePush (name, employeeNumber, annualSalary, reviewRating, bonus) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
    this.bonus = bonus;
}

bonusCalc(employees);
//check for employee number length (4 gets 15% more)

//check if income is greater than 65K, lose 1% if great

//check if bonus percent is below 0% or above 13%

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
