const numbers = [1, 2, 66, 3, 4, 5];

const maximum = numbers.reduce(function (previousValue, currentValue) {
    return Math.max(previousValue , currentValue);
}, 0) // giving initial value 

console.log("maximum value: " + maximum);