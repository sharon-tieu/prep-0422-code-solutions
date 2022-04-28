function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(x) {
  return x * 60;
}

var product = convertHoursToMinutes(2);
console.log(product);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var total = addAndMultiplyBy5(10, 5);
console.log(total);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var number = multiplyAndDivideBy5(35, 10);
console.log(number);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Juan', 'Ramirez');
console.log(name);

function cube(number) {
  return number * number * number;
}
var productCube = cube(5);
console.log(productCube);
