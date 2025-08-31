let principal = Number(prompt("Enter principal amount:"));
let rate = Number(prompt("Enter annual interest rate (%):"));
let time = Number(prompt("Enter time in years:"));

let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest: " + simpleInterest);