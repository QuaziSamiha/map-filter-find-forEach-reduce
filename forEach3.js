const numbers = [1, 4, 5, 7, 8];
const squareNumbers = [];

numbers.forEach(function (element) { // anonymous function
    squareNumbers.push(element * element);
});

console.log(squareNumbers);