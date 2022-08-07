//Q5.
var unit = 300;
var unit = window.prompt("Enter Electricity Units");
var bill = 0;
var additional = unit > 250;
if (unit > 50) {
  bill += 25;
} else bill += unit * 0.5;
unit -= 50;

if (unit > 100) {
  bill += 75;
} else if (unit > 0) bill += unit * 0.75;
unit -= 100;

if (unit > 100) {
  bill += 120;
} else if (unit > 0) bill += unit * 1.2;
unit -= 100;
if (unit > 0) bill += unit * 1.5;
if (additional) bill += bill * 0.2;
console.log(bill);
